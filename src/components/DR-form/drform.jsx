import React from "react";

const DonorRegistration = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl border-2 border-blue-500">
        <form className="grid grid-cols-3 gap-6">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              DOB
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="emergency-contact" className="block text-sm font-medium text-gray-700">
              Emergency Contact
            </label>
            <input
              type="text"
              id="emergency-contact"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="blood-group" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              id="blood-group"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="">Drop down</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight
            </label>
            <input
              type="number"
              id="weight"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height
            </label>
            <input
              type="number"
              id="height"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="className"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>
        </form>

        <button
          type="submit"
          className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded-md mt-6"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default DonorRegistration;
