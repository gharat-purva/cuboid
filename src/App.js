import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseApp from './Course/CourseApp';
import NoCourseApp from './noCourse/NoCourseApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/course" element={<CourseApp />} />
        <Route path="/nocourse" element={<NoCourseApp />} />
        <Route path="/" element={<div>Select a version: /course or /nocourse</div>} />
      </Routes>
    </Router>
  );
}

export default App;
