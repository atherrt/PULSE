import React from 'react';

const userHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="path-to-logo.png" // Replace with your logo path
          alt="Pulse Logo"
          className="w-8 h-8"
        />
        <span className="ml-2 text-lg font-bold text-red-600">PULSE</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8 text-sm">
        <a href="#nearby-hospitals" className="text-red-600 hover:underline">
          VIEW NEARBY HOSPITALS
        </a>
        <a href="#donate" className="text-red-600 hover:underline">
          DONATE
        </a>
        <a href="#request-blood" className="text-red-600 hover:underline">
          REQUEST BLOOD
        </a>
        <a href="#give-rating" className="text-gray-700 hover:underline">
          Give Rating
        </a>
        <a href="#edit-profile" className="text-gray-700 hover:underline">
          Edit Profile
        </a>
      </nav>

      {/* Logout Button */}
      <button className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-red-800">
        Logout
      </button>
    </header>
  );
};

export default userHeader;
