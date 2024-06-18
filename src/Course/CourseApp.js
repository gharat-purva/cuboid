import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const CourseApp = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col font-serif bg-gray">
      <Header />
      <MainContent />
    </div>
  </div>
);

export default CourseApp;
