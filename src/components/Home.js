import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    videoContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
      zIndex: -1,
    },
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      color: 'white',

      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      zIndex: 1,
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    subheading: {
      fontSize: '1.2rem',
      marginBottom: '30px',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    btn: {
      textDecoration: 'none',
      background: '#a64cc0',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '1rem',
      color: 'white',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      minWidth: '180px',
    },
  };

  return (
    <>
      {/* Background Video */}
      <div style={styles.videoContainer}>
        <video autoPlay muted loop style={styles.video}>
          <source
            src="https://media.istockphoto.com/id/1650431876/video/tablet-teamwork-and-a-construction-worker-team-on-a-building-site-outdoor-for-a-project.mp4?s=mp4-640x640-is&k=20&c=toZtSdk1C1J85SoYd86vYzND3pFXxu_FvnRBTduxaNk="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Main Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to the Labour Hire System</h1>
      
        <div style={styles.buttonGroup}>
          <Link
            to="/Register"
            style={styles.btn}
            onMouseEnter={(e) => (e.target.style.background = '#008c9e')}
            onMouseLeave={(e) => (e.target.style.background = '#a64cc0')}
          >
            Register
          </Link>
          <Link
            to="/login"
            style={styles.btn}
            onMouseEnter={(e) => (e.target.style.background = '#008c9e')}
            onMouseLeave={(e) => (e.target.style.background = '#a64cc0')}
          >
            login
          </Link>
          <Link to='/ForgotPassword'>Forgot Password</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
