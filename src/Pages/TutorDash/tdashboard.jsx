import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  // Dummy data for courses and analytics
  const courses = [
    { id: 1, title: 'Course 1', studentsEnrolled: 120 },
    { id: 2, title: 'Course 2', studentsEnrolled: 95 },
    { id: 3, title: 'Course 3', studentsEnrolled: 78 },
  ];

  const totalCourses = courses.length;
  const totalStudentsEnrolled = courses.reduce((total, course) => total + course.studentsEnrolled, 0);

  return (
    <DashboardContainer>
      <DashboardContent>
        <DashboardHeader>
          <HeaderText>Welcome to Your Dashboard</HeaderText>
          <p>Here's a quick overview of your courses and students enrolled.</p>
        </DashboardHeader>
        <DashboardStats>
          <StatCard>
            <StatValue>{totalCourses}</StatValue>
            <StatLabel>Total Courses</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{totalStudentsEnrolled}</StatValue>
            <StatLabel>Total Students Enrolled</StatLabel>
          </StatCard>
        </DashboardStats>
        <CourseList>
          <CourseListTitle>My Courses</CourseListTitle>
          {courses.map(course => (
            <CourseItem key={course.id}>
              <CourseImage src={process.env.PUBLIC_URL + '/Images/course-3.jpg'} alt={course.title} />
              <CourseDetails>
                <CourseTitle>{course.title}</CourseTitle>
                <StudentsEnrolled>{course.studentsEnrolled} Students Enrolled</StudentsEnrolled>
              </CourseDetails>
            </CourseItem>
          ))}
        </CourseList>
      </DashboardContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DashboardContent = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 20px;
`;

const DashboardHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const HeaderText = styled.div`
  background-color: teal;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  font-size: 28px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const DashboardStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: teal;
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: #555;
`;

const CourseList = styled.div`
  margin-top: 20px;
`;

const CourseListTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

const CourseItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin-right: 20px;
`;

const CourseDetails = styled.div`
  flex-grow: 1;
`;

const CourseTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const StudentsEnrolled = styled.div`
  color: #555;
  font-size: 18px;
`;

export default Dashboard;
