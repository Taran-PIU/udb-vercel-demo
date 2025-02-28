const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info@udbhavx.com',
      pass: 'xirietwicqxljdob',
    },
  });

  await transporter.sendMail({
    from: 'info@udbhavx.com',
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;
