import React from "react";

const DonationHistory = () => {
  // Dummy data for the table
  const donations = [
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 2 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 3 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 1 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 4 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 2 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 3 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 1 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 2 },
    { date: "12/1/2024", hospitalName: "Jinnah Hospital", address: "Lorem Ipsum Lorem Ipsum...", bottles: 3 },
  ];

  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Donation Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Hospital Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Address</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Number of Bottles</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-700">{donation.date}</td>
                <td className="px-4 py-2 text-red-600 font-medium">{donation.hospitalName}</td>
                <td className="px-4 py-2 text-gray-700">{donation.address}</td>
                <td className="px-4 py-2 text-gray-700">{donation.bottles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;
