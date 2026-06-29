const nodemailer = require("nodemailer");

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
  CONTACT_TO_EMAIL,
  CONTACT_FROM_EMAIL,
} = process.env;

const canSendMail = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL);

let transporter;

function getTransporter() {
  if (!canSendMail) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return transporter;
}

async function sendContactNotification(contact) {
  const mailer = getTransporter();
  if (!mailer) return { sent: false, reason: "not_configured" };

  const subject = contact.subject || "New portfolio contact";
  const from = CONTACT_FROM_EMAIL || SMTP_USER;
  const replyTo = contact.email;
  const text = [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Budget: ${contact.budget || "Not provided"}`,
    "",
    contact.message,
  ].join("\n");

  await mailer.sendMail({
    from,
    to: CONTACT_TO_EMAIL,
    replyTo,
    subject: `Portfolio contact: ${subject}`,
    text,
  });

  return { sent: true };
}

module.exports = { sendContactNotification };
