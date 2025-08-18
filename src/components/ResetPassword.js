import React, { useState } from 'react';

const ResetPassword = () => {
  const [form, setForm] = useState({ email: '', otp: '', newPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = async () => {
    const res = await fetch('http://localhost:8080/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="otp" placeholder="OTP" onChange={handleChange} />
      <input name="newPassword" type="password" placeholder="New Password" onChange={handleChange} />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
