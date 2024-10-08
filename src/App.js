import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import CoursesSec from './Components/CoursesSec';
import JobsSec from './Components/JobsSec';
import BlogsSec from './Components/BlogsSec';
import ContactSec from './Components/ContactSec';
import ContactPage from './Pages/ContactPage/Contact';
import LoginPage from './Pages/LoginPage/Login';
import Reg from './Pages/Register/reg';
import JobsDetail from './Pages/JobsPage/Jobsdetail';
import JobsPage from './Pages/JobsPage/Jobs';
import BlogsPage from './Pages/BlogsPage/Blogs';
import CoursesPage from './Pages/CoursesPage/Courses';
import SinglePost from './Pages/BlogsPage/SinglePost';
import Write from './Pages/SpecialDash/Write';
import CourseDetail from './Pages/CoursesPage/CourseDetail';
import Tutor from './Pages/ProfileSetup/tutor'; 
import Freelancer from './Pages/ProfileSetup/freelancer'; 
import Theader from './Pages/TutorDash/Theader';
import Tdashboard from './Pages/TutorDash/tdashboard';
import Tcourses from './Pages/TutorDash/tcourses';
import Tmonitoring from './Pages/TutorDash/tmonitoring';
import Tprofile from './Pages/TutorDash/tprofile';
import Edash from './Pages/EmployerDash/Edash';
import Epostjobs from './Pages/EmployerDash/Epostjobs';
import Einbox from './Pages/EmployerDash/Einbox';
import EHeader from './Pages/EmployerDash/Eheader';
import EFooter from './Pages/EmployerDash/Efooter';
import Eapp from './Pages/EmployerDash/Eapp';
import Sdashboard from './Pages/SpecialDash/Sdashboard';
import Sjobs from './Pages/SpecialDash/Sjobs';
import Smycourse from './Pages/SpecialDash/Smycourse';
import Scourses from './Pages/SpecialDash/Scourses';
import Sblogs from './Pages/SpecialDash/Sblogs';
import Chat from './Pages/ChatApp/Chat';
import EditProfile from './Components/EditProfile';

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <CoursesSec />
    <JobsSec />
    <BlogsSec />
    <ContactSec />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPageWithHeaderFooter />} />
        <Route path="/login" element={<LoginPageWithoutHeaderFooter />} />
        <Route path="/reg" element={<RegWithoutHeaderFooter />} />
        <Route path="/jobsdetail/:id" element={<JobsDetailWithHeaderFooter />} />
        <Route path="/jobs" element={<JobsPageWithHeaderFooter />} />
        <Route path="/blogs" element={<BlogsPageWithHeaderFooter />} />
        <Route path="/courses" element={<CoursesPageWithHeaderFooter />} />
        <Route path="/SinglePost" element={<SinglePostWithHeaderFooter />} />
        <Route path="/write" element={<WriteWithoutHeaderFooter />} />
        <Route path="/coursedetail/:id" element={<CourseDetailWithHeaderFooter />} />
        <Route path="/tutor" element={<TutorWithHeaderFooter />} />
        <Route path="/freelancer" element={<FreelancerWithHeaderFooter />} />
        <Route path="/tdashboard" element={<TdashboardWithHeaderFooter />} />
        <Route path="/tcourses" element={<TcoursesWithHeaderFooter />} />
        <Route path="/tprofile" element={<TprofileWithHeaderFooter />} />
        <Route path="/tmonitoring" element={<TmonitoringWithoutHeaderFooter />} />
        <Route path="/edash" element={<EdashWithHeaderFooter />} />
        <Route path="/eapp" element={<EappWithHeaderFooter />} />
        <Route path="/epostjobs" element={<EpostjobsWithHeaderFooter />} />
        <Route path="/einbox" element={<EinboxWithoutHeaderFooter />} />
        <Route path="/sdashboard" element={<SdashboardWithoutHeaderFooter />} />
        <Route path="/sjobs" element={<SjobsWithoutHeaderFooter />} />
        <Route path="/smycourse" element={<SmycourseWithoutHeaderFooter />} />
        <Route path="/scourses" element={<ScoursesWithoutHeaderFooter />} />
        <Route path="/sblogs" element={<SblogsWithoutHeaderFooter />} />
        <Route path="/chat" element={<ChatWithoutHeaderFooter />} />
        <Route path="/editprofile" element={<EditProfileWithoutHeaderFooter />} />
      </Routes>
    </Router>
  );
};

// Define components with Header and Foote

const ContactPageWithHeaderFooter = () => (
  <>
    <Header />
    <ContactPage />
    <Footer />
  </>
);



const TutorWithHeaderFooter = () => (
  <>
    <Header />
    <Tutor />
    <Footer />
  </>
);

const FreelancerWithHeaderFooter = () => (
  <>
    <Header />
    <Freelancer />
    <Footer />
  </>
);

const JobsPageWithHeaderFooter = () => (
  <>
    <Header />
    <JobsPage />
    <Footer />
  </>
);

const JobsDetailWithHeaderFooter = () => (
  <>
    <Header />
    <JobsDetail />
    <Footer />
  </>
);

const BlogsPageWithHeaderFooter = () => (
  <>
    <Header />
    <BlogsPage />
    <Footer />
  </>
);

const CoursesPageWithHeaderFooter = () => (
  <>
    <Header />
    <CoursesPage />
    <Footer />
  </>
);

const SinglePostWithHeaderFooter = () => (
  <>
    <Header />
    <SinglePost />
    <Footer />
  </>
);



const CourseDetailWithHeaderFooter = () => (
  <>
    <Header />
    <CourseDetail />
    <Footer />
  </>
);



const EdashWithHeaderFooter = () => (
  <>
    <EHeader /> 
    <Edash />
    <EFooter />
  </>
);

const EpostjobsWithHeaderFooter = () => (
  <>
    <EHeader /> 
    <Epostjobs />
    <EFooter />
  </>
);

const EappWithHeaderFooter = () => (
  <>
    <EHeader /> 
    <Eapp />
    <EFooter />
  </>
);

const EinboxWithoutHeaderFooter = () => (
  <>
  <EHeader />
<Einbox />
<EFooter />
</>
);

const TdashboardWithHeaderFooter = () =>(
  <>
  <Theader />
  <Tdashboard />
  </>
);

const TprofileWithHeaderFooter = () => (
<>
  <Theader />
  <Tprofile />
</>
);

const TcoursesWithHeaderFooter = () => (
  <>
  <Theader />
  <Tcourses />
  </>
);

// Define components without Header and Footer

const TmonitoringWithoutHeaderFooter = () => <Tmonitoring />;
const SdashboardWithoutHeaderFooter = () => <Sdashboard />;
const LoginPageWithoutHeaderFooter = () => <LoginPage />;
const RegWithoutHeaderFooter = () => <Reg />;
const SjobsWithoutHeaderFooter = () => <Sjobs />;
const SmycourseWithoutHeaderFooter = () => <Smycourse />;
const ScoursesWithoutHeaderFooter = () => <Scourses />;
const SblogsWithoutHeaderFooter = () => <Sblogs />;
const WriteWithoutHeaderFooter = () => <Write />;
const ChatWithoutHeaderFooter = () => <Chat />;
const EditProfileWithoutHeaderFooter = () => <EditProfile />;


// Define other components without Header and Footer similarly...

export default App;