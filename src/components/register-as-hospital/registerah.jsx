import React from 'react';

const HospitalRegistration = () => {
  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form>
          <div className="mb-4">
            <label htmlFor="hospital-name" className="block text-sm font-medium text-gray-700 mb-1">
              Hospital name
            </label>
            <input
              id="hospital-name"
              type="text"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <input
              id="capacity"
              type="text"
              placeholder="Value"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300"
            />
          </div>
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

export default HospitalRegistration;
