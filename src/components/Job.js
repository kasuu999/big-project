import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Step 1

const Job = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    category: '',
    amount: '',
    description: ''
  });

  const navigate = useNavigate(); // ✅ Step 2

  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/jobs', formData);
      alert('Job posted successfully');
      setFormData({
        title: '',
        location: '',
        category: '',
        amount: '',
        description: ''
      });
      navigate('/combo'); // ✅ Step 3: Redirect after success
    } catch (err) {
      alert('Failed to post job');
    }
  };

  // Styling (same as before)
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #fdfbfb, #ebedee)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            style={inputStyle}
            value={formData[key]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          style={{
            ...buttonStyle,
            backgroundColor: hover ? '#218838' : '#28a745',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Job;
