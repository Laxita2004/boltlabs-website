const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

// Submit contact form
const submitContact = async (req, res) => {
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

    // Create submission object
    const submission = {
      timestamp: new Date().toISOString(),
      name,
      email,
      message
    };

    // Ensure data directory exists
    const dataDir = path.join(__dirname, '..', 'data');
    try {
      await fs.mkdir(dataDir, { recursive: true });
      console.log('3. Data directory created/verified');
    } catch (error) {
      console.log('3. Error creating data directory:', error);
    }

    // Save submission
    const submissionsPath = path.join(dataDir, 'submissions.json');
    let submissions = [];
    
    try {
      const data = await fs.readFile(submissionsPath, 'utf8');
      submissions = JSON.parse(data);
      console.log('4. Read existing submissions');
    } catch (error) {
      console.log('4. No existing submissions file, starting fresh');
    }

    submissions.push(submission);
    
    try {
      await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2));
      console.log('5. Successfully saved submission');
      
      // Send email notification if configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        console.log('Attempting to send email notification');
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
          console.log('Email notification sent successfully');
        } catch (emailError) {
          console.error('Error sending email:', emailError);
          // Don't fail the request if email fails
        }
      } else {
        console.log('Email credentials not configured, skipping email notification');
      }

      return res.status(200).json({
        success: true,
        message: 'Message received successfully'
      });
    } catch (error) {
      console.log('5. Error saving submission:', error);
      throw error;
    }

  } catch (error) {
    console.log('6. Error in submitContact:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process your message'
    });
  }
};

module.exports = {
  submitContact
}; 