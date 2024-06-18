import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Calendar = () => {
  return (
    <div className="p-4 bg-white rounded-3xl font-medium font-serif w-1/3">
      <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg">August 2021</h2>
        <FontAwesomeIcon icon={faAngleLeft} className="text-dark-gray text-sm border border-dark-gray p-2 rounded-full" />
        <FontAwesomeIcon icon={faAngleRight} className="text-dark-gray text-sm border border-dark-gray p-2 rounded-full" />
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="p-2">S</div>
        <div className="p-2">M</div>
        <div className="p-2">T</div>
        <div className="p-2">W</div>
        <div className="p-2">T</div>
        <div className="p-2">F</div>
        <div className="p-2">S</div>
      </div>
      <p className="mt-2 text-center text-gray-700">No course today</p>
    </div>
  );
};

export default Calendar;
