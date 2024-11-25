import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice"; // Adjust the path based on your project structure

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, error, success } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      {/* Login Form */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Sign In
          </h2>

          {error && (
            <div className="bg-red-200 text-red-800 text-sm p-2 rounded mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-200 text-green-800 text-sm p-2 rounded mb-4">
              Login successful!
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <a
              href="#forgot-password"
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
