import React from "react";

const EditProfile = () => {
  return (
    <div className="bg-red-200 min-h-screen py-10 px-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-red-800 mb-6">Edit Profile</h2>
        
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Owner Name</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Hospital Name</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Hospital Type</label>
              <select
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              >
                <option>Drop down</option>
                {/* Add more options if necessary */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <select
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              >
                <option>Drop down</option>
                {/* Add more options if necessary */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">License Number</label>
              <select
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              >
                <option>Drop down</option>
                {/* Add more options if necessary */}
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Emergency Contact</label>
              <select
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              >
                <option>Drop down</option>
                {/* Add more options if necessary */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Website URL</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Address</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">License Expiry Date</label>
              <input
                type="date"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Value"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button className="bg-red-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-800 mt-6">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
