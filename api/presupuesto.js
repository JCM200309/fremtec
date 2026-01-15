import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // CLAVE para multipart
  },
};

function parseForm(req) {
  const form = formidable({
    multiples: false,
    maxFileSize: 10 * 1024 * 1024, // 10MB (ajustá)
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fields, files } = await parseForm(req);

    const name = fields.name?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const location = fields.location?.toString() || "";
    const type = fields.type?.toString() || "";
    const details = fields.details?.toString() || "";

    if (!name || !email || !phone || !location) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <h2>Nuevo pedido de presupuesto</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Ubicación:</b> ${location}</p>
      <p><b>Tipo:</b> ${type}</p>
      <p><b>Detalles:</b><br/>${String(details || "-").replace(/\n/g, "<br/>")}</p>
    `;

    // El input del front usa fd.append("file", file)
    const uploaded = files.file; // puede ser undefined si no mandan archivo

    const attachments = [];

    if (uploaded) {
      // formidable puede devolver un array si multiples=true, acá no.
      const fileObj = Array.isArray(uploaded) ? uploaded[0] : uploaded;

      const filepath = fileObj.filepath; // path temporal
      const originalFilename = fileObj.originalFilename || "factura";
      const mimetype = fileObj.mimetype || "application/octet-stream";

      const buffer = await fs.readFile(filepath);
      const base64 = buffer.toString("base64");

      attachments.push({
        filename: originalFilename,
        content: base64,     // <- CLAVE: Resend necesita el contenido
        type: mimetype,      // opcional pero recomendado
      });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", // en prod: tu dominio verificado
      to: process.env.TO_EMAIL,
      subject: `Pedido de presupuesto - ${name} (${type || "sin tipo"})`,
      replyTo: email,
      html,
      ...(attachments.length ? { attachments } : {}),
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Error enviando el email." });
  }
}
