import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, clearState } from "../../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access state from Redux, including roleId initialized from localStorage
  const { isLoading, error, success, token, roleId,userId,HospitalId,paitentId, userDetails } = useSelector(
    (state) => state.auth
  );

  console.log(roleId);


  const [UsernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ UsernameOrEmail, password }));
  };

  // Redirect after successful login
  useEffect(() => {
    if (success && token) {
      // Create a data object to pass via state
      const dataToPass = { token, roleId, userDetails,userId };

      // Navigate based on roleId and pass the data to the next page
      if (roleId === 1) {
        navigate("/hospital-dashboard", { state: dataToPass });
      } else if (roleId === 2) {
        navigate("/donor-dashboard", { state: dataToPass });
      } else {
        navigate("/", { state: dataToPass });
      }

      dispatch(clearState()); // Clear success and error states after login
    }
  }, [success, token, roleId,HospitalId,paitentId, userDetails, navigate, dispatch]);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="UsernameOrEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="UsernameOrEmail"
                placeholder="Enter your email or username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={UsernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
