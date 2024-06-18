import React from 'react';
import Overview from './Overview';
import Achievement from './Achievement';
import Calendar from './Calendar';
import Course from './Course';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray font-serif">
      <Course />
      <Overview />
      <div className="mt-4 flex">
        <Achievement className="w-2/3 mr-4" />
        <Calendar className="w-1/3" />
      </div>
    </div>
  );
};

export default MainContent;
