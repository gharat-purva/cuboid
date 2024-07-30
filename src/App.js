import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CourseApp from './Course/CourseApp';
import NoCourseApp from './noCourse/NoCourseApp';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select a version:</h1>
      <button onClick={() => navigate('/course')} className="m-2 p-2 bg-cool-blue text-white rounded">Course</button>
      <button onClick={() => navigate('/nocourse')} className="m-2 p-2 bg-purple text-white rounded">No Course</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/course" element={<CourseApp />} />
        <Route path="/nocourse" element={<NoCourseApp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
