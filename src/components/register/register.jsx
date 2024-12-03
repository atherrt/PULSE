import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../features/authSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, success, userId } = useSelector((state) => state.auth);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  useEffect(() => {
    if (success && step === 1) {
      // Move to role selection if registration is successful
      setStep(2);
    }
  }, [success, step]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

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
    };

    dispatch(register(registrationData));
  };

  const handleRoleSelection = (role) => {
    setFormData({ ...formData, role });

    // Navigate to role-specific registration page
    const route =
      role === "Hospital" ? "/hospital-registration" : "/donor-registration";

    navigate(route, {
      state: { userId, role }, // Pass userId and role to the next page
    });
  };

  const renderSignUpForm = () => (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm mb-4">
            Registration successful! Proceed to role selection.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
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
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? "bg-gray-400" : "bg-rose-700 hover:bg-rose-800"
            } text-white py-2 px-4 rounded-md mt-4`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );

  const renderRoleSelection = () => (
    <div className="bg-rose-200 min-h-screen flex items-center justify-center">
      <div className="space-y-6 w-full max-w-md px-4">
        <button
          className="w-full bg-rose-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-rose-800 transition duration-150"
          onClick={() => handleRoleSelection("Hospital")}
        >
          Register as a Hospital
        </button>

        <button
          className="w-full bg-rose-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-rose-800 transition duration-150"
          onClick={() => handleRoleSelection("Donor/Receiver")}
        >
          Register as a Donor / Receiver
        </button>
      </div>
    </div>
  );

  return step === 1 ? renderSignUpForm() : renderRoleSelection();
};

export default SignUpPage;
