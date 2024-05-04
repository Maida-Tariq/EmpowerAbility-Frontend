import React, { useState } from 'react';
import styled from 'styled-components';
import CourseCard from './tcoursecard'; // Import the CourseCard component

const UploadCoursePage = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: '',
    visualImpairment: false,
    hearingImpairment: false,
    motorImpairment: false,
    coverImage: null, // New state for the cover image
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit course data (can be sent to backend or stored locally)
    setSubmitted(true);
  };

  return (
    <MainContent>
      <Title>Upload Course for Uniquely Abled Individuals</Title>
      <Form onSubmit={handleSubmit}>
        <SectionTitle>Course Details</SectionTitle>
        <FormGroup>
          <Label>
            <LabelText>Course Title:</LabelText>
          </Label>
          <Input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            <LabelText>Course Description:</LabelText>
          </Label>
          <Textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Enter course description"
            rows="4"
            required
          />
        </FormGroup>
        <InlineFormGroup>
          <FormGroup>
            <Label>
              <LabelText>Category:</LabelText>
            </Label>
            <Select
              name="category"
              value={course.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="language">Language</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>
              <LabelText>Difficulty Level:</LabelText>
            </Label>
            <Select
              name="difficulty"
              value={course.difficulty}
              onChange={handleChange}
              required
            >
              <option value="">Select difficulty level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </FormGroup>
        </InlineFormGroup>
        <SectionTitle>Accessibility Options</SectionTitle>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            id="visualImpairment"
            name="visualImpairment"
            checked={course.visualImpairment}
            onChange={handleChange}
          />
          <Label htmlFor="visualImpairment">Speech Impairment</Label>
        </CheckboxGroup>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            id="hearingImpairment"
            name="hearingImpairment"
            checked={course.hearingImpairment}
            onChange={handleChange}
          />
          <Label htmlFor="hearingImpairment">Hearing Impairment</Label>
        </CheckboxGroup>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            id="motorImpairment"
            name="motorImpairment"
            checked={course.motorImpairment}
            onChange={handleChange}
          />
          <Label htmlFor="motorImpairment">Motor Impairment</Label>
        </CheckboxGroup>
        <SectionTitle>File Upload</SectionTitle>
        <FileInput type="file" name="coverImage" onChange={handleChange} />
        <SubmitButton type="submit">Submit Course</SubmitButton>
      </Form>
      {submitted && <CourseCard course={course} />} {/* Use the CourseCard component */}
    </MainContent>
  );
};

const MainContent = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 30px 0 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InlineFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

const LabelText = styled.span`
  flex: 1;
`;

const Input = styled.input`
  width: 97%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 97%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 60%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  text-align: center;
  margin: 30px auto;
  display: block;

  &:hover {
    border: 1px solid teal;
    background-color: white;
    color: teal;
  }
`;

export default UploadCoursePage;
