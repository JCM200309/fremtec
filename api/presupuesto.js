import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // CLAVE: si Vercel lo trata como API tipo Next
  },
};

function parseMultipart(req) {
  const form = formidable({
    multiples: false,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error("Missing RECAPTCHA_SECRET_KEY");

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const googleRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  return googleRes.json(); // { success, score?, action?, challenge_ts, hostname, ... }
}




export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fields, files } = await parseMultipart(req);

    const name = fields.name?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const location = fields.location?.toString() || "";
    const type = fields.type?.toString() || "";
    const subType = fields.subType?.toString() || "";
    const details = fields.details?.toString() || "";
    const token = fields.recaptchaToken?.toString() || "";
  

    if (!token) {
      return res.status(400).json({ error: "Falta Campo Captcha" });
    }

    if (!name || !email || !phone || !location) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }
    const res_captcha = await verifyRecaptcha(token);

    if (!res_captcha?.success) {
      return res.status(403).json({
        error: "Captcha falló",
        details: res_captcha?.["error-codes"],
      });
    }

    // Logs útiles para Vercel
    console.log("TO_EMAIL:", process.env.TO_EMAIL);
    console.log("RESEND_API_KEY existe?", !!process.env.RESEND_API_KEY);
    console.log("FILES keys:", Object.keys(files || {}));

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <h2>Nuevo pedido de presupuesto</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Ubicación:</b> ${location}</p>
      <p><b>Tipo:</b> ${type}</p>
      <p><b>Subtipo (Solo si selecciono residencial): ${subType}</p>
      <p><b>Detalles:</b><br/>${String(details || "-").replace(/\n/g, "<br/>")}</p>
    `;

    const attachments = [];

    // El nombre "file" tiene que coincidir con fd.append("file", file) en el front
    const uploaded = files.file;
    if (uploaded) {
      const f = Array.isArray(uploaded) ? uploaded[0] : uploaded;

      const buffer = await fs.readFile(f.filepath);
      attachments.push({
        filename: f.originalFilename || "factura",
        content: buffer.toString("base64"),
        type: f.mimetype || "application/octet-stream",
      });
    }

    const result = await resend.emails.send({
      from: "Fremtec <contacto@contacto.fremtec.com.ar>",
      to: process.env.TO_EMAIL,
      subject: `Pedido de presupuesto desde la Pagina Web - ${name} (${type || "-"})`,
      replyTo: email,
      html,
      ...(attachments.length ? { attachments } : {}),
    });

    console.log("Resend result:", result);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("ERROR API presupuesto:", e);
    return res.status(500).json({ error: e?.message || "Error enviando el email." });
  }
}
