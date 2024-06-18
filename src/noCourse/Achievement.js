import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faThumbsUp, faAward, faStar, faTrophy, faClipboard } from '@fortawesome/free-solid-svg-icons';

const Achievement = () => {
  return (
    <div className="p-8 bg-white rounded-3xl font-poppins w-2/3 font-medium mr-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg">Achievement</h2>
        <div className="flex items-center border border-light-gray rounded-lg p-1">
          <span className="mr-2 pr-2 pl-2 text-sm font-normal text-lesser-black">Date reach</span>
          <FontAwesomeIcon icon={faCaretDown} className="text-dark-gray" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="text-cool-blue">
              <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-black">Friendly</h3>
              <p className="text-sm font-normal text-lesser-black">Follow 3 friends</p>
            </div>
          </div>
          <span className="text-sm text-dark-gray font-poppins">19 Feb 2021</span>
        </div>
        <div className="flex items-center justify-between border border-light-gray rounded-lg p-2">
          <div className="flex items-center">
            <div className="text-cool-blue">
              <FontAwesomeIcon icon={faAward} className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-black">Best New Comer</h3>
              <p className="text-sm font-normal text-lesser-black">Complete all skills in a course</p>
            </div>
          </div>
          <span className="text-sm text-dark-gray font-poppins">08 Dec 2021</span>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="text-cooler-blue">
              <FontAwesomeIcon icon={faStar} className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-black">Overachiever</h3>
              <p className="text-sm font-normal text-lesser-black">Earned 300 XP in a day</p>
            </div>
          </div>
          <span className="text-sm text-dark-gray font-poppins">09 Oct 2021</span>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="text-purple">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-black">First 1k Experience Point</h3>
              <p className="text-sm font-normal text-lesser-black">Earned 1,000 XP</p>
            </div>
          </div>
          <span className="text-sm text-dark-gray font-poppins">20 Jan 2021</span>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <div className="text-cool-orange">
              <FontAwesomeIcon icon={faClipboard} className="text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-black">The Wise Guy</h3>
              <p className="text-sm font-normal text-lesser-black">Got lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <span className="text-sm text-dark-gray font-poppins">26 Feb 2021</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-lesser-black">Discover more assets ›</a>
      </div>
    </div>
  );
};

export default Achievement;
