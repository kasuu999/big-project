const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

let otpStore = {}; // Temporary OTP store

// Send OTP
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ error: 'User not found' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  // Mail config
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',     // 🔴 replace
      pass: 'your-app-password'         // 🔴 replace (not Gmail password, use App Password)
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'OTP for Password Reset',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).json({ error: 'Failed to send OTP' });
    res.json({ message: 'OTP sent successfully' });
  });
});

// Verify OTP
router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    res.json({ message: 'OTP verified' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.password = newPassword;
  await user.save();

  delete otpStore[email]; // Remove used OTP
  res.json({ message: 'Password updated successfully' });
});

module.exports = router;
