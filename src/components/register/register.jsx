import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../features/authSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, success } = useSelector((state) => state.auth);

  const [step, setStep] = useState(1); // Track current step: 1 for sign-up form, 2 for role selection
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

  // Handle form submission for sign-up
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const registrationData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role, // Role will be selected in the next step
      detailedInfo: formData.detailedInfo,
    };

    dispatch(register(registrationData)); // Dispatch register action

    // Move to next step (role selection)
    setStep(2);
  };

  // Handle role selection and complete registration
  const handleRoleSelection = (role) => {
    setFormData({ ...formData, role });

    // Complete registration after role selection
    const registrationData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: role, // Set the selected role
      detailedInfo: formData.detailedInfo,
    };

    dispatch(register(registrationData)); // Dispatch the register action

    // Redirect based on the selected role
    if (role === "Hospital") {
      navigate("/hospital-registration"); // Redirect to hospital registration form
    } else if (role === "Donor/Receiver") {
      navigate("/donor-registration"); // Redirect to donor/receiver registration form
    }
  };

  // Render the Sign Up Form (Step 1)
  const renderSignUpForm = () => (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Error message */}
        {success && <p className="text-green-500 text-sm mb-4">Registration successful!</p>} {/* Success message */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${isLoading ? "bg-gray-400" : "bg-rose-700 hover:bg-rose-800"} text-white py-2 px-4 rounded-md mt-4`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );

  // Render Role Selection (Step 2)
  const renderRoleSelection = () => (
    <div className="bg-rose-200 min-h-screen flex items-center justify-center">
      <div className="space-y-6 w-full max-w-md px-4">
        {/* Register as Hospital */}
        <button
          className="w-full bg-rose-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-rose-800 transition duration-150"
          onClick={() => handleRoleSelection("Hospital")}
        >
          Register as a Hospital
        </button>

        {/* Register as Donor / Receiver */}
        <button
          className="w-full bg-rose-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-rose-800 transition duration-150"
          onClick={() => handleRoleSelection("Donor/Receiver")}
        >
          Register as a Donor / Receiver
        </button>
      </div>
    </div>
  );

  // Render Final Confirmation (Step 3)
  const renderFinalConfirmation = () => (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Role Selection</h2>
        <p className="text-lg text-gray-700 mb-4">You have selected: {formData.role}</p>
        <button
          className="w-full bg-rose-700 text-white py-2 rounded-md"
          onClick={() => alert("Registration Complete!")}
        >
          Complete Registration
        </button>
      </div>
    </div>
  );

  // Render the appropriate step
  if (step === 1) {
    return renderSignUpForm();
  } else if (step === 2) {
    return renderRoleSelection();
  } else {
    return renderFinalConfirmation();
  }
};

export default SignUpPage;
