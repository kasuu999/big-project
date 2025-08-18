import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const sendOtp = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/send-otp', { email });
      setOtpSent(true);
      alert('OTP sent!');
    } catch (err) {
      alert('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/verify-otp', { email, otp });
      setVerified(true);
      alert('OTP verified!');
    } catch (err) {
      alert('Invalid OTP');
    }
  };

  const resetPassword = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/reset-password', { email, newPassword });
      alert('Password reset successful!');
    } catch (err) {
      alert('Failed to reset password');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Forgot Password</h2>
      {!otpSent && (
        <>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}
      {otpSent && !verified && (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      {verified && (
        <>
          <input type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button onClick={resetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
