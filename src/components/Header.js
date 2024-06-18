import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faFire } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray font-serif mt-4">
      <div>
        <h1 className="text-4xl font-medium mb-5">Good Morning, Eureka</h1>
        <p className="text-sm text-lesser-black">Today Aug 22, 2020 | 7:23 PM</p>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faSearch} className="mr-4 text-dark-gray" />
        <div className="relative">
          <span className="absolute left-3 bg-orange text-white text-xs rounded-full w-2 h-2 flex items-center justify-center"></span>
          <FontAwesomeIcon icon={faBell} className="text-dark-gray" />
        </div>
        <div className="ml-4 flex items-center ">
          <div className="flex items-center bg-white border-1 border-dark-gray rounded-xl p-3">
            <div className="bg-orange text-white rounded-full w-6 h-6 flex items-center justify-center mr-2"></div>
            <span className="text-lesser-black font-medium">Eureka</span>
            <span className="mx-2 text-lesser-black font-thin ">|</span>
            <FontAwesomeIcon icon={faFire} className="text-yellow" />
            <span className='text-xs text-dark-gray'> 230</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
