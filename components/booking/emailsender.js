// emailSender.js (or any other appropriate file)
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

const sendBookingConfirmationEmail = (recipientEmail, movieName, bookedSeats, totalAmount) => {
  const mailOptions = {
    from: 'your_email@example.com',
    to: recipientEmail,
    subject: 'Booking Confirmation',
    html: `
      <html>
        <body>
          <h2>Booking Confirmation</h2>
          <p>Movie: ${movieName}</p>
          <p>Booked Seats: ${bookedSeats.join(', ')}</p>
          <p>Total Amount: ${totalAmount}$</p>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default sendBookingConfirmationEmail;
