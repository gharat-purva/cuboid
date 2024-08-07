import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faBook, faCalendarAlt, faComments, faFire, faCog } from '@fortawesome/free-solid-svg-icons';
import logoDesktop from '../assets/logoDesktop.png';
import logoMobile from '../assets/logoMobile.png';
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const menuItems = [
    { name: 'Overview', icon: faComputer },
    { name: 'Courses', icon: faBook },
    { name: 'Schedule', icon: faCalendarAlt, hasNotification: true },
    { name: 'Discussion', icon: faComments },
    { name: 'Leaderboard', icon: faFire },
    { name: 'Settings', icon: faCog },
  ];

  return (
    <div className="w-64 bg-gray p-4 font-serif ml-2">
      {/* Display Logo */}
      <div className="flex justify-center mb-8">
        <img
          src={isMobile ? logoMobile : logoDesktop}
          alt="Logo"
          className="h-9 w-auto"
        />
      </div>

      <h2 className="text-2xl font-medium mb-4">Cuboid</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`mb-5 flex items-center p-2 rounded ${selectedItem === index ? 'bg-light-green' : ''}`}
          >
            <button
              onClick={() => setSelectedItem(index)}
              className={`flex items-center w-full text-left ${selectedItem === index ? 'text-dark-green' : 'text-dark-gray'} `}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`mr-3 ${selectedItem === index ? 'text-dark-green' : 'text-dark-gray'}`}
              />
              {item.name}
            </button>
            {item.hasNotification && (
              <span className="ml-2 p-3 bg-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">4</span>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-72 p-4 bg-white rounded-lg text-center">
        <p className="text-sm">Upgrade to Premium member</p>
        <button className="mt-2 p-3 bg-dark-green text-black rounded-3xl">Upgrade now</button>
      </div>
    </div>
  );
};

export default Sidebar;
