import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = "service_e4n1tgt"; // Replace with your EmailJS service ID
    const templateId = "template_s6n5p1s"; // Replace with your EmailJS template ID
    const userId = "NkdmYqyyc27ENf2km"; // Replace with your EmailJS user/public ID

    const templateParams = {
      email: email, // Dynamic email address
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setError("Failed to send the email. Please try again.");
      });
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      {/* Forgot Password Form */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Forgot Password
          </h2>

          {isSubmitted ? (
            <div className="bg-green-200 text-green-800 text-sm p-4 rounded mb-4">
              If the email address is registered, a password reset link will be
              sent to your inbox.
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              {error && (
                <div className="bg-red-200 text-red-800 text-sm p-2 rounded mb-4">
                  {error}
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your registered email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <div className="mt-4 text-center">
            <Link
              to="/login" // Replace with the actual route for login
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
