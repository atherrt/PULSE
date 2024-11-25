import React from "react";

const HospitalRegistration = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <form className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="owner-name"
              className="block text-sm font-medium text-gray-700"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="owner-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label
              htmlFor="hospital-name"
              className="block text-sm font-medium text-gray-700"
            >
              Hospital Name
            </label>
            <input
              type="text"
              id="hospital-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="emergency-contact"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="hospital-type"
              className="block text-sm font-medium text-gray-700"
            >
              Hospital Type
            </label>
            <select
              id="hospital-type"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="">Drop down</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label
              htmlFor="website-url"
              className="block text-sm font-medium text-gray-700"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website-url"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label
              htmlFor="license-number"
              className="block text-sm font-medium text-gray-700"
            >
              License Number
            </label>
            <input
              type="text"
              id="license-number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Value"
            />
          </div>

          <div>
            <label
              htmlFor="license-expiry-date"
              className="block text-sm font-medium text-gray-700"
            >
              License Expiry Date
            </label>
            <input
              type="date"
              id="license-expiry-date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
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

export default HospitalRegistration;
