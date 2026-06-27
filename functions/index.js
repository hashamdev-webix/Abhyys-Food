const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Email transporter configuration
// TODO: Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hashamulhaq068@gmail.com", // Your Gmail address
    pass: "nyvfgycpsqyskoev", // Gmail App Password (NOT regular password)
  },
});

// Cloud Function triggered when a new quote request is added
exports.sendQuoteConfirmation = functions.firestore
  .document("quote-requests/{requestId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const { name, email, phone, message } = data;

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: '"Abhyy\'s Food" <info@abhyysfoods.com>',
      to: email,
      subject: "We Received Your Quote Request - Abhyy's Food",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
            .button { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <h2>We've Received Your Quote Request</h2>
              <p>Thank you for reaching out to Abhyy's Food. We've received your request and our team will get back to you shortly.</p>
              
              <h3>Your Request Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-left: 4px solid #4CAF50;">${message}</p>
              
              <p>We'll review your requirements and respond within 24 hours.</p>
              
              <p>In the meantime, feel free to contact us directly:</p>
              <p>📞 Phone: +1 403-836-3512<br>
              📧 Email: info@abhyysfoods.com<br>
              📍 Address: 8500 84 ST SE, Calgary, Alberta, Canada T3S 0A1</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Abhyy's Food. All rights reserved.</p>
              <p>High-quality food with consistent standards</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to admin (notification)
    const adminMailOptions = {
      from: '"Abhyy\'s Food System" <your-email@gmail.com>',
      to: "info@abhyysfoods.com", // Your business email
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF5722; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #FF5722; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Quote Request!</h1>
            </div>
            <div class="content">
              <h2>Customer Details:</h2>
              <div class="info-box">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
              </div>
              
              <h3>Message:</h3>
              <div class="info-box">
                <p>${message}</p>
              </div>
              
              <p><strong>Request ID:</strong> ${context.params.requestId}</p>
              <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
              
              <p>⚠️ Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      // Send both emails
      await Promise.all([
        transporter.sendMail(customerMailOptions),
        transporter.sendMail(adminMailOptions),
      ]);

      console.log("Emails sent successfully to:", email);
      return null;
    } catch (error) {
      console.error("Error sending emails:", error);
      return null;
    }
  });
