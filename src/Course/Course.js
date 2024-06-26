import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const Course = () => {
  return (
    <div className="bg-white rounded-3xl p-8 flex justify-between items-center mb-6 font-serif">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faClipboard} className="text-yellow text-6xl mr-4" />
        <div>
          <p className="text-sm text-dark-gray">Uups!</p>
          <p className="text-lg font-medium text-black">You didn't book any course yet!</p>
        </div>
      </div>
      <button className="bg-dark-green text-black py-2 px-6 rounded-3xl">Browse now</button>
    </div>
  );
};

export default Course;
