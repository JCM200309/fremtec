import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, location, type, details , file} = req.body || {};

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

    await resend.emails.send({
      from: "onboarding@resend.dev",        // sin dominio (modo prueba)
      to: process.env.TO_EMAIL,             // mail de la empresa
      subject: `Pedido de presupuesto - ${name} (${type})`,
      replyTo: email,                       // responder al cliente
      html,
      attachments:[
        {
          filename: file.name
        },
      ]
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Error enviando el email." });
  }
}
