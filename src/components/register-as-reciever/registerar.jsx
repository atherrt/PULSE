import React from 'react';

const RecieverRegistration = () => {
  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
          {/* Blood Group Dropdown */}
          <div className="mb-4">
            <label htmlFor="blood-group" className="block text-sm font-medium text-gray-700 mb-1">
              Blood group
            </label>
            <select
              id="blood-group"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            >
              <option value="" disabled selected>
                Drop down
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          {/* City Input */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-4 w-full rounded-lg hover:bg-red-800 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecieverRegistration;
