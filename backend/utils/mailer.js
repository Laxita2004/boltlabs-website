import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// 🔐 Reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // app password
  },
});

// 📩 Function to send password reset mail
export const sendResetMail = async (to, token) => {
  const resetUrl = `http://localhost:3000/reset-password?token=${token}`;

  const mailOptions = {
    from: `"No-Reply" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Password Reset Link",
    html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 15 minutes.</p>`,
  };

  return transporter.sendMail(mailOptions);
};

// 📬 Function to send contact form message
export const sendContactEmail = async (formData) => {
  const { name, email, phone, subject, message } = formData;

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};
