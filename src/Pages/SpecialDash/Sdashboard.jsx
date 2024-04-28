import React from 'react';
import Layout from './Slayout'; // Adjust the path as needed
import styled from 'styled-components';

// Styled components for the dashboard layout
const DashboardContainer = styled.div`
  padding: 2rem;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr; /* One column for the personalized section */
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #008080; /* Teal color */
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center; 
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff; /* White text color */
`;

const Subtitle = styled.p`
  color: #fff; /* White text color */
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #fff; /* White background */
  color: #008080; /* Teal text color */
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #006666; /* Darker teal on hover */
    color: #fff; /* White text color on hover */
  }
`;

// Styled component for the image container
const ImageContainer = styled.div`
  margin-left: 10rem; /* Add margin at the right */
`;

const DashboardImageStyled = styled.img`
  width: 80%;
  height: auto;
`;

// Styled component for the dashboard content
const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-left: 4rem;
`;

const ParallelContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
`;

const ParallelSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Sdashboard = () => {
  return (
    <Layout>
      <DashboardContainer>
        {/* Personalized welcome section */}
        <Card>
          
          <DashboardContent>
            <SectionTitle>Welcome to Your Dashboard!</SectionTitle>
            <Subtitle>Take control of your learning and career journey with EmpowerAbility.</Subtitle>
            <Button>Get Started</Button>
          </DashboardContent>
          <ImageContainer>
            <DashboardImageStyled src="/Images/sdash.png" alt="Dashboard" />
          </ImageContainer>
        </Card>

        {/* Parallel sections for community engagement and career opportunities */}
        <ParallelSections>
          {/* Community engagement section */}
          <Card>
            <ParallelContainer>
            <SectionTitle>Join the EmpowerAbility Community</SectionTitle>
            <Subtitle>Connect with like-minded individuals and share your experiences.</Subtitle>
            <Button>Join Community</Button>
            </ParallelContainer>
          </Card>

          {/* Career opportunities section */}
          <Card>
            <ParallelContainer>
            <SectionTitle>Discover Exciting Job Opportunities</SectionTitle>
            <Subtitle>Explore job openings from inclusive employers.</Subtitle>
            <Button>Explore Jobs</Button>
            </ParallelContainer>
          </Card>
        </ParallelSections>
      </DashboardContainer>
    </Layout>
  );
};

export default Sdashboard;
