import nodemailer from 'nodemailer';

export const sendResetMail = async (to, token) => {
  const resetUrl = `http://localhost:3000/reset-password?token=${token}`; // Adjust to frontend route

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your gmail
      pass: process.env.EMAIL_PASS  // your app password
    }
  });

  const mailOptions = {
    from: `"No-Reply" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Password Reset Link',
    html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 15 minutes.</p>`
  };

  await transporter.sendMail(mailOptions);
};
