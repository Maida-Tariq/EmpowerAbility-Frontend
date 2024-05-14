import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import {
  CoursePageWrapper,
  CoursesHeader,
  Header,
  SearchSection,
  CoursesSection,
  EnrollmentButton,
  Pagination,
  TestimonialsSection,
  TestimonialCard,
  NavigationArrow,
} from './styles';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const coursesPerPage = 6;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const dummyData = [
    { 
      id: 1, 
      title: 'Introduction to Adaptive Physical Education', 
      category: 'Physically Disabled', 
      level: 'Beginner', 
      image: '/Images/course-1.jpg' 
    },
    { 
      id: 2, 
      title: 'American Sign Language Basics', 
      category: 'Deaf', 
      level: 'Intermediate', 
      image: '/Images/course-2.jpg' 
    },
    { 
      id: 3, 
      title: 'Inclusive Web Design for Accessibility', 
      category: 'Physically Disabled', 
      level: 'Advanced', 
      image: '/Images/course-3.jpg' 
    },
    { 
      id: 4, 
      title: 'Communication Strategies for the Deaf', 
      category: 'Deaf', 
      level: 'Intermediate', 
      image: '/Images/course-1.jpg' 
    },
    { 
      id: 5, 
      title: 'Advanced Mobility Solutions', 
      category: 'Physically Disabled', 
      level: 'Expert', 
      image: '/Images/course-2.jpg' 
    },
    { 
      id: 6, 
      title: 'Mastering Deaf Culture and Community', 
      category: 'Deaf', 
      level: 'Expert', 
      image: '/Images/course-3.jpg' 
    },
  ];
  
  const dummyTestimonials = [
    { 
      id: 1, 
      name: 'Emily Rodriguez', 
      image: '/Images/people.jpg', 
      content: 'The adaptive physical education course empowered me to stay active and live a healthier life. Truly life-changing!' 
    },
    { 
      id: 2, 
      name: 'John Smith', 
      image: '/Images/people.jpg', 
      content: 'I found the American Sign Language Basics course incredibly useful. It opened up new opportunities for me to communicate effectively with the deaf community.' 
    },
    { 
      id: 3, 
      name: 'Sophia Johnson', 
      image: '/Images/people.jpg', 
      content: 'Mastering Deaf Culture and Community course helped me gain a deeper understanding and appreciation for the deaf community. Its been an eye-opening experience.'
    },
    // Add more testimonial objects as needed
  ];
  
  

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    // Dummy data setup

    setCourses(dummyData);
    setTestimonials(dummyTestimonials);
  }, []);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const filteredCourses = courses.filter((course) => {
    const titleMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory ? course.category === selectedCategory : true;
    const levelMatch = selectedLevel ? course.level === selectedLevel : true;
    return titleMatch && categoryMatch && levelMatch;
  });
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CoursePageWrapper>
      <CoursesHeader>
        <Header>
          <h1>Our Courses</h1>
          <div>
            <span>Home / Courses</span>
          </div>
        </Header>

        <SearchSection>
          <input
            type="text"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Physically Disabled">Physically Disabled</option>
              <option value="Deaf">Deaf</option>
            </select>
            <label>Level:</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </SearchSection>
      </CoursesHeader>


      <CoursesSection>
      {currentCourses.map((course) => (
    <div key={course.id}>
      <img src={process.env.PUBLIC_URL + course.image} alt={course.title} />
      <h3>
      <Link
        to={`/coursedetail/${course.id}`} 
        style={{ color: 'teal', textDecoration: 'none' }}
        state={{ course }}
      >
        {course.title}
      </Link>
      </h3>
            <p>Category: {course.category}</p>
            <p>Level: {course.level}</p>
            <EnrollmentButton>
            <Link
        to={`/coursedetail/${course.id}`}  
        state={{ course }} style={{color:'white', textDecoration: 'none'}}
      >
        Enroll Now
      </Link>
      </EnrollmentButton>

          </div>
        ))}
        {currentCourses.length === 0 && <p>No results found.</p>}
      </CoursesSection>

      <Pagination>
        {/* Pagination */}
        {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </Pagination>

      <TestimonialsSection>
  {/* Testimonials section */}
  <h2>What Our Students Say</h2>
  {testimonials.length > 0 && testimonials[currentTestimonialIndex] && (
    <TestimonialCard>
      <img
        src={process.env.PUBLIC_URL + testimonials[currentTestimonialIndex].image}
        alt={testimonials[currentTestimonialIndex].name}
      />
      <p>{testimonials[currentTestimonialIndex].content}</p>
      <p style={{color:'teal'}}>- {testimonials[currentTestimonialIndex].name}</p>
    </TestimonialCard>
  )}
  <div>
    <NavigationArrow onClick={prevTestimonial}>&#9664;</NavigationArrow>
    <NavigationArrow onClick={nextTestimonial}>&#9654;</NavigationArrow>
  </div>
</TestimonialsSection>

    </CoursePageWrapper>
  );
};

export default CoursePage;