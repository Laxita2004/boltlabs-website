import { supabase } from '../server.js';
import nodemailer from 'nodemailer';

// Submit contact form controller
export const submitContact = async (req, res) => {
  console.log('1. Received contact form submission:', req.body);

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      console.log('2. Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Insert submission into Supabase
    const { data, error } = await supabase.from('contact_submissions').insert([
      {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      }
    ]);

    if (error) {
      console.error('3. Error inserting into Supabase:', error);
      return res.status(500).json({ success: false, error: 'Database error' });
    }

    console.log('4. Successfully inserted into Supabase');

    // Optional: Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      console.log('5. Attempting to send email notification');
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: 'New Contact Form Submission',
          text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `
        });

        console.log('6. Email notification sent successfully');
      } catch (emailError) {
        console.error('6. Error sending email:', emailError);
        // Don't fail request due to email issues
      }
    } else {
      console.log('5. Email credentials not set, skipping email');
    }

    return res.status(200).json({
      success: true,
      message: 'Message received successfully'
    });

  } catch (error) {
    console.log('7. Server error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process your message'
    });
  }
};
