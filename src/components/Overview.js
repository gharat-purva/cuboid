import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCertificate, faClock, faBook } from '@fortawesome/free-solid-svg-icons';

const Overview = () => {
  return (
    <div className="bg-gray font-serif mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-3xl p-8 flex items-center">
          <FontAwesomeIcon icon={faFire} className="text-yellow text-3xl mr-4" />
          <div>
            <p className="text-black font-medium">Total Points</p>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-3xl p-8 flex items-center">
          <FontAwesomeIcon icon={faCertificate} className="text-yellow text-3xl mr-4" />
          <div>
            <p className="text-black font-medium">Certificates</p>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-3xl p-8 flex items-center">
          <FontAwesomeIcon icon={faClock} className="text-yellow text-3xl mr-4" />
          <div>
            <p className="text-black font-medium">Learning Time</p>
            <p className="text-3xl font-semibold">0 h</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-3xl p-8 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-yellow text-3xl mr-4" />
          <div>
            <p className="text-black font-medium">Completed Courses</p>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
