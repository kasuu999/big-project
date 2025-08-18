import React from 'react';
import { Link } from 'react-router-dom';

import image3 from './image3.png';


const Combo = () => {
  // Styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${image3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // transparent white
  padding: '50px',
  borderRadius: '20px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
  width: '300px',
  backdropFilter: 'blur(10px)', // blur behind the box
  WebkitBackdropFilter: 'blur(10px)', // Safari support
};


  const titleStyle = {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '30px',
    fontWeight: '600',
  };

  const linkStyle = {
    display: 'block',
    margin: '15px 0',
    padding: '12px 25px',
    backgroundColor: '#4a00e0',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#3800b0';
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4a00e0';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={titleStyle}>Choose an Option</div>
        <Link
          to='/Hire'
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hire Labor
        </Link>
        <Link
          to='/Apply'
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Apply for Job
        </Link>
        <Link
          to='/Job'
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Job Post
        </Link>
      </div>
    </div>
  );
};

export default Combo;
