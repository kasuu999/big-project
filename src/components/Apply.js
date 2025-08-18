import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Add this line

const Apply = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    jobId: '',
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    resumeLink: ''
  });

  const navigate = useNavigate(); // ✅ Add this line

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs')
      .then(res => setJobs(res.data))
      .catch(() => alert('Failed to load jobs'));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.jobId) {
      alert('Please select a job');
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/applications', formData);
      alert('Application submitted successfully');
      setFormData({
        jobId: '',
        applicantName: '',
        applicantEmail: '',
        applicantPhone: '',
        resumeLink: ''
      });
      navigate('/combo'); // ✅ Redirect after success
    } catch {
      alert('Failed to submit application');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <select name="jobId" value={formData.jobId} onChange={handleChange} required style={{ padding: 8, marginBottom: 10, width: '100%' }}>
          <option value="">Select a Job</option>
          {jobs.map(job => (
            <option key={job._id} value={job._id}>
              {job.title} - {job.category} - {job.location}
            </option>
          ))}
        </select>

        <input
          name="applicantName"
          placeholder="Your Name"
          value={formData.applicantName}
          onChange={handleChange}
          required
          style={{ padding: 8, marginBottom: 10, width: '100%' }}
        />
        <input
          type="email"
          name="applicantEmail"
          placeholder="Your Email"
          value={formData.applicantEmail}
          onChange={handleChange}
          
          style={{ padding: 8, marginBottom: 10, width: '100%' }}
        />
        <input
          name="applicantPhone"
          placeholder="Your Phone Number"
          value={formData.applicantPhone}
          onChange={handleChange}
          required
          style={{ padding: 8, marginBottom: 10, width: '100%' }}
        />
        <input
          name="resumeLink"
          placeholder="address"
          value={formData.resumeLink}
          onChange={handleChange}
          style={{ padding: 8, marginBottom: 10, width: '100%' }}
        />
        <button type="submit" style={{ padding: 10, backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default Apply;
