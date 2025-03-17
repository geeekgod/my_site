import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, subject, name, message } = body;

    if (!email || !subject || !name || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const output = `
      <p>You have a new Mail by the Website</p>
      <p>${subject}</p>
      <h3>Contact Details</h3>
      <pre>
           Name: ${name}
           Email: ${email}
      </pre>
      <h3>Subject</h3>
      <p>${subject}</p>
      <h3>Message</h3>
      <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Rishabh Singh Website" <${process.env.MAILER_EMAIL}>`,
      to: "ris8645208@gmail.com",
      subject: "Mail from Website",
      html: output,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ msg: "message sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
