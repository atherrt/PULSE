import React from "react";

const HospitalHeader = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* Heartbeat symbol */}
        <span className="text-red-700 text-3xl font-bold">&#x2764;&#xFE0F;</span>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-6 text-gray-700 text-sm">
        <a href="/add-blood" className="text-red-700 font-semibold hover:underline">
          ADD BLOOD
        </a>
        <a href="/view-ratings" className="hover:underline">
          View Ratings
        </a>
        <a href="/edit-profile" className="hover:underline">
          Edit Profile
        </a>
      </nav>

      {/* Logout Button */}
      <button className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 shadow-md">
        Logout
      </button>
    </header>
  );
};

export default HospitalHeader;
