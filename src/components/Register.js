import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './image2.png'; // 👈 image2.png ko import kiya gaya hai

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.status === 200) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundImage: `url(${bgImage})`,  // 👈 background image use ki gayi hai
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: '#fff', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <input 
          type='text' 
          name='name' 
          placeholder='Full Name' 
          onChange={handleChange} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <input 
          type='number' 
          name='number' 
          placeholder='Number' 
          onChange={handleChange} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          onChange={handleChange} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          required 
          onChange={handleChange} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <button 
          type='submit' 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            cursor: 'pointer' 
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
