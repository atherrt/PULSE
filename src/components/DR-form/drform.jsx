import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { registerDonor } from "../../features/donorSlice"; // Import the action for registering donor

const DonorRegistration = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { userId ,username} = location.state || {};
  const [formData, setFormData] = useState({
    // fullName: "",
    // dob: "",
    // phoneNumber: "",
    // emergencyContact: "",
    // bloodGroup: "",
    // email: "",
    // weight: "",
    // height: "",
    // cnic: "",
    // address: "",

    userId: userId || 0, 
    roleId: 2,
    fullName: usrname,
    phoneNumber: "",
    emergencyContact: "",
    address: "",
    patientId: 0,
    dateOfBirth: "",
    weight: 0,
    height: 0,
    cnic: string,
    "bloodGroupId": 0
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    // Dispatch the action to register the donor
    dispatch(registerDonor(formData));

    // You can navigate to another page after registration if needed, e.g., dashboard
    // navigate("/dashboard"); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl border-2 border-blue-500">
        <form className="grid grid-cols-3 gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
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
              value={formData.dob}
              onChange={handleChange}
              required
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
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
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
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="Enter emergency contact"
            />
          </div>

          <div>
            <label htmlFor="blood-group" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              id="blood-group"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.height}
              onChange={handleChange}
              placeholder="Enter height"
            />
          </div>

          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="Enter CNIC"
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
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded-md mt-6"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;
