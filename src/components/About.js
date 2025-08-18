import React from 'react';

export function About() {
  return (
    <div style={{
      backgroundColor: '#fdfdfd',
      padding: '50px 20px',
      borderRadius: '16px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#222',
      margin: '40px auto',
      maxWidth: '900px',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '36px',
        color: '#005792',
        marginBottom: '25px',
        letterSpacing: '1.5px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}>
        About Us
      </h2>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        maxWidth: '700px',
        margin: '0 auto 30px',
        color: '#444'
      }}>
        Our Labour Hiring System bridges the gap between skilled laborers and contractors across the country. Whether you're a daily wage worker or a business in need of reliable hands, we provide a trusted platform to connect, communicate, and collaborate.
      </p>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto',
        color: '#666'
      }}>
        Our mission is to empower hardworking individuals by giving them more visibility, respect, and job opportunities — while making it easier for contractors to find the right workers on time.
      </p>
    </div>
  );
}
