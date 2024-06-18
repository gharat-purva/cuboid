import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Achievement = () => {
  return (
    <div className="p-4 bg-white rounded-3xl font-serif w-2/3 font-medium mr-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg">Achievement</h2>
        <div className="flex items-center border border-light-gray rounded-lg p-1">
          <span className="mr-2 pr-2 pl-2 text-sm font-normal text-lesser-black">Date reach</span>
          <FontAwesomeIcon icon={faCaretDown} className="text-dark-gray" />
        </div>
      </div>
      <div className="text-center mt-10">
        <FontAwesomeIcon icon={faClipboard} className="text-yellow text-6xl mb-4" />
        <div className="flex items-center justify-center h-32 rounded-lg">
          <p className="text-black">You didn't reach an achievement yet!</p>
        </div>
        <div className="flex justify-center h-32 rounded-lg">
          <p className="text-black">Get it now ›</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
