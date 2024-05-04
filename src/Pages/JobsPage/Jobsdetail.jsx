import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { jobId } = useParams(); // Extract the job ID from the URL params

  // Dummy job data (replace with your own data or API call)
  const job = {
    id: jobId,
    title: 'Software Engineer',
    company: 'TechCo',
    location: 'San Francisco, CA',
    description: 'TechCo is seeking a skilled software engineer to join our dynamic team...',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Strong problem-solving skills',
    ],
    howToApply: 'To apply for this position, please send your resume and cover letter to careers@techco.com.',
  };

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <hr />
      <h3>Description</h3>
      <p>{job.description}</p>
      <hr />
      <h3>Requirements</h3>
      <ul>
        {job.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <hr />
      <h3>How to Apply</h3>
      <p>{job.howToApply}</p>
    </div>
  );
};

export default JobDetailPage;
