import React from 'react';
import styled from 'styled-components';

const CourseCard = ({ course }) => {
  return (
    <CenteredContainer>
      <CardContainer>
        <CourseCover src={URL.createObjectURL(course.coverImage)} alt="Course Cover" />
        <CardContent>
          <Title>{course.title}</Title>
          <Description>{course.description}</Description>
          <InfoWrapper>
            <InfoItem>
              <strong>Category:</strong> {course.category}
            </InfoItem>
            <InfoItem>
              <strong>Difficulty:</strong> {course.difficulty}
            </InfoItem>
          </InfoWrapper>
        </CardContent>
        <ButtonWrapper>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </ButtonWrapper>
      </CardContainer>
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  margin: 10px auto; /* Center the card horizontally */
`;

const CourseCover = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  font-size: 12px;
  color: #666;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
  }
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: teal;
  }
`;

export default CourseCard;
