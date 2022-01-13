import type { NextApiRequest, NextApiResponse } from "next";

export default function Contact(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(process.env.MAILER_EMAIL);
  let nodemailer = require("nodemailer");
  const output = `
    <p>You have a new Mail by the Website</p>
    <p>${req.body.subject}</p>
    <h3>Contact Details</h3>
    <pre>
         Name: ${req.body.name}
         Email: ${req.body.email}
    </pre>
    <h3>Subject</h3>
    <p>${req.body.subject}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
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

  let mailOptions = {
    from: `"Rishabh Singh Website" <${process.env.MAILER_EMAIL}>`,
    to: "ris8645208@gmail.com",
    subject: "Mail from Website",
    html: output,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({ msg: "message sent" });
  });
}
