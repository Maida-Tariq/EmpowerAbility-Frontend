import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for enhanced styling
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666666;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333333;
`;

const RequirementsList = styled.ul`
  margin-bottom: 20px;
`;

const RequirementItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
`;

const ApplyText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333;
`;

const ApplyButton = styled.button`
  background-color: teal;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
  }
`;

const SalaryCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Salary = styled.span`
  font-size: 18px;
  color: #666666;
`;

const Category = styled.span`
  font-size: 18px;
  color: #666666;
`;

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
    salary: '$80,000 - $120,000 per year',
    category: 'Hearing Impairment', // Example category for a hearing-impaired role
  };

  return (
    <Container>
      <Title>{job.title}</Title>
      <SubTitle>Company: {job.company}</SubTitle>
      <SubTitle>Location: {job.location}</SubTitle>
      <hr />
      <Description>
        <h3>Description</h3>
        {job.description}
      </Description>
      <hr />
      <RequirementsList>
        <h3>Requirements</h3>
        {job.requirements.map((requirement, index) => (
          <RequirementItem key={index}>{requirement}</RequirementItem>
        ))}
      </RequirementsList>
      <SalaryCategoryWrapper>
        <Salary>Salary: {job.salary}</Salary>
        <Category>Category: {job.category}</Category>
      </SalaryCategoryWrapper>
      <ApplyText>{job.howToApply}</ApplyText>
      <ApplyButton>Apply Now</ApplyButton>
    </Container>
  );
};

export default JobDetailPage;
