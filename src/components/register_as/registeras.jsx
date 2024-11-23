// RegisterOptions.jsx
import React from "react";

const RegisterOptions = () => {
  return (
    <div className="bg-red-100 min-h-screen flex items-center justify-center">
      <div className="space-y-6 w-full max-w-md px-4">
        {/* Register as Hospital */}
        <button
          className="w-full bg-red-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-red-800 transition duration-150"
          onClick={() => alert("Register as a Hospital")}
        >
          Register as a Hospital
        </button>

        {/* Register as Donor */}
        <button
          className="w-full bg-red-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-red-800 transition duration-150"
          onClick={() => alert("Register as a Donor")}
        >
          Register as a Donor
        </button>

        {/* Register as Receiver */}
        <button
          className="w-full bg-red-700 text-white py-4 rounded-md text-lg font-semibold hover:bg-red-800 transition duration-150"
          onClick={() => alert("Register as a Receiver")}
        >
          Register as a Receiver
        </button>
      </div>
    </div>
  );
};

export default RegisterOptions;
