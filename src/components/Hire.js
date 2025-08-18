import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Add this line

const Hire = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate(); // ✅ Add this line

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs')
      .then(res => setJobs(res.data))
      .catch(() => alert('Failed to load jobs'));

    axios.get('http://localhost:8080/api/applications')
      .then(res => setApplications(res.data))
      .catch(() => alert('Failed to load applications'));
  }, []);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  const containerStyle = { padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };
  const cardStyle = { backgroundColor: '#fff', padding: '15px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' };
  const nameStyle = { fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' };
  const roleStyle = { color: '#666', marginBottom: '5px' };
  const availabilityStyle = { color: 'green', fontWeight: 'bold', marginBottom: '5px' };
  const buttonStyle = { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

  const note = () => {
    alert('Labour hired');
    navigate('/combo'); // ✅ Redirect after alert
  };

  return (
    <div style={containerStyle}>
      {jobs.map((job, index) => {
        const jobApplications = applications.filter(app => app.jobId._id === job._id);

        return (
          <div
            key={job._id}
            style={{
              ...cardStyle,
              transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p style={nameStyle}>{job.title}</p>
            <p style={roleStyle}>{job.category}</p>
            <p style={availabilityStyle}>{job.location} | ₹{job.amount}/day</p>
            <p style={availabilityStyle}>{job.description}</p>

            <button style={buttonStyle} onClick={note}>Hire</button> {/* ✅ Button will now redirect */}

            {jobApplications.length > 0 && (
              <>
                <h4>Applications:</h4>
                <ul>
                  {jobApplications.map(app => (
                    <li key={app._id} style={{ marginBottom: '8px' }}>
                      <strong>{app.applicantName}</strong> | {app.applicantEmail} | {app.applicantPhone}
                      {app.resumeLink && (
                        <> | <a href={app.resumeLink} target="_blank" rel="noreferrer">Call</a></>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Hire;
