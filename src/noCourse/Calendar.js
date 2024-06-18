import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

const Calendar = () => {
  return (
    <div className="p-6 bg-white rounded-3xl font-poppins w-80 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">August 2021</h2>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faAngleLeft} className="text-dark-gray text-sm border border-light-gray p-2 rounded-full" />
          <FontAwesomeIcon icon={faAngleRight} className="text-dark-gray text-sm border border-light-gray p-2 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-7 text-center mb-4">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-sm text-dark-gray">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center mb-6">
        {[...Array(31).keys()].slice(14, 21).map((day, index) => (
          <div key={index} className={`p-2 rounded-lg ${day === 16 ? 'border border-dark-green text-black' : 'text-lesser-black'}`}>
            {day + 1}
          </div>
        ))}
      </div>
      <div className="bg-orange rounded-lg h-32 mb-4"></div>
      <div>
        <h3 className="font-medium mb-6">Product Design in Everyday life</h3>
        <p className="text-xs text-dark-gray flex items-center mb-6">
          <span className="flex -space-x-1 overflow-hidden">
            <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150" alt="profile" />
            <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150" alt="profile" />
            <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150" alt="profile" />
          </span>
          <span className="ml-2 text-xs">you and +15 people join this course</span>
        </p>
        <div className="flex items-center text-dark-gray mt-2">
          <FontAwesomeIcon icon={faClock} className="mr-1" />
          <span className="text-sm">8:00 AM</span>
          <FontAwesomeIcon icon={faUser} className="ml-4 mr-1" />
          <span className="text-sm">Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
