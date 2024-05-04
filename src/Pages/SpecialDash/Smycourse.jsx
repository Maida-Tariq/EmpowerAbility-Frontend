import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from './Slayout'; 

const EnrolledCoursesPage = () => {
  // Dummy data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Doe',
      description: 'Learn the basics of HTML, CSS, and JavaScript.',
      progress: '60%', 
      image: '/Images/course-3.jpg' 
    },
    {
      id: 2,
      title: 'Python for Beginners',
      instructor: 'Jane Smith',
      description: 'A beginner-friendly introduction to Python programming.',
      progress: '25%',
      image: '/Images/course-3.jpg' 
    },
    // Add more dummy data as needed
  ];

  return (
    <Layout>
      <Wrapper>
        <PageTitle>Enrolled Courses</PageTitle>
        <PageSubtitle>Explore your enrolled courses and continue your learning journey</PageSubtitle>
        <CourseList>
          {enrolledCourses.map(course => (
            <Course key={course.id}>
              <CourseImage src={course.image} alt={course.title} />
              <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <InstructorName>Instructor: {course.instructor}</InstructorName>
                <Description>{course.description}</Description>
              </CourseContent>
              <Progress>Status: {course.progress} completed</Progress>
              <ResumeButton>
                <Link to={`/coursedetail/${course.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                  Resume
                </Link>
              </ResumeButton>
            </Course>
          ))}
        </CourseList>
      </Wrapper>
    </Layout>
  );
};

// Styled components
const Wrapper = styled.div`
  padding: 20px;
  margin: 50px auto; 
  max-width: 1200px; 
  text-align: center; 
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; 
`;

const Course = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(30% - 20px); 
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 150px; /* Adjusted height */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CourseContent = styled.div`
  flex: 1;
`;

const CourseTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InstructorName = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Progress = styled.p`
  font-size: 16px;
  color: teal;
`;

const ResumeButton = styled.button`
  background-color: teal;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
  }
`;

export default EnrolledCoursesPage;
