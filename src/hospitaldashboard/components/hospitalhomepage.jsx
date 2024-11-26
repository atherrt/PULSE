import React from "react";
import { useSelector } from "react-redux";
import { selectHospitalInfo } from "../../features/hospitalinfoSlice";

const HospitalInfo = () => {
  const hospitalInfo = useSelector(selectHospitalInfo);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10">
      <div className="bg-red-200 p-10 w-11/12 md:w-4/5 lg:w-2/3 rounded-lg shadow-md">
        {/* Hospital Information Section */}
        <div className="mb-6">
          <h2 className="text-red-800 font-bold mb-4">HOSPITAL INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Name:</span> {hospitalInfo.name}
            </p>
            <p>
              <span className="font-semibold">Joined Since:</span> {hospitalInfo.joinedSince}
            </p>
            <p>
              <span className="font-semibold">License Number:</span> {hospitalInfo.licenseNumber}
            </p>
            <p>
              <span className="font-semibold">Contact Info:</span> {hospitalInfo.contactInfo}
            </p>
          </div>
        </div>

        {/* Logistics Section */}
        <div className="mb-6">
          <h2 className="text-red-800 font-bold mb-4">LOGISTICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Beds:</span> {hospitalInfo.beds}
            </p>
            <p>
              <span className="font-semibold">Wards:</span> {hospitalInfo.wards}
            </p>
            <p>
              <span className="font-semibold">Emergency Ward:</span> {hospitalInfo.emergencyWard}
            </p>
            <p>
              <span className="font-semibold">Overall Feedback:</span> {hospitalInfo.overallFeedback}
            </p>
            <p>
              <span className="font-semibold">Hospital Timings:</span> {hospitalInfo.hospitalTimings}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {hospitalInfo.phone}
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <button className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-900">
            VIEW BLOOD BANK
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
