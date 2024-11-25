import React, { useState } from "react";


const SignUpPage = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // Role: Hospital, Donor, Receiver
    detailedInfo: {}, // Stores role-specific data
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle role selection
  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setStep(3); // Move to detailed form step
  };

  // Render Basic Information Form
  const renderBasicInfoForm = () => (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
          placeholder="Value"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
          placeholder="Value"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
          placeholder="Value"
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
          placeholder="Value"
        />
      </div>

      <button
        type="button"
        onClick={() => setStep(2)} // Move to role selection
        className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded-md mt-4"
      >
        Next
      </button>
    </form>
  );

  // Render Role Selection
  const renderRoleSelection = () => (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-700">Select Your Role</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => handleRoleSelect("Hospital")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Hospital
        </button>
        <button
          onClick={() => handleRoleSelect("Donor")}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
        >
          Donor
        </button>
        <button
          onClick={() => handleRoleSelect("Receiver")}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md"
        >
          Receiver
        </button>
      </div>
      <button
        onClick={() => setStep(1)} // Go back to basic info
        className="text-sm text-gray-500 hover:underline"
      >
        Back
      </button>
    </div>
  );

  // Render Role-Specific Detailed Form
  const renderDetailedForm = () => (
    <form className="space-y-4">
      <h2 className="text-lg font-bold text-gray-700">
        {formData.role} Detailed Information
      </h2>
      {/* Add fields specific to Hospital, Donor, or Receiver */}
      <div>
        <label
          htmlFor="specificField"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Specific Info
        </label>
        <input
          type="text"
          id="specificField"
          onChange={(e) =>
            setFormData({
              ...formData,
              detailedInfo: { ...formData.detailedInfo, [e.target.id]: e.target.value },
            })
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
          placeholder="Value"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded-md mt-4"
      >
        Submit
      </button>
      <button
        onClick={() => setStep(2)} // Go back to role selection
        className="text-sm text-gray-500 hover:underline"
      >
        Back
      </button>
    </form>
  );

  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {step === 1 && renderBasicInfoForm()}
        {step === 2 && renderRoleSelection()}
        {step === 3 && renderDetailedForm()}
      </div>
    </div>
  );
};

export default SignUpPage;
