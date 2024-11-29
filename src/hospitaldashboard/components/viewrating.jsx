import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../features/ratingslice"; // Import the slice

const ViewRating = () => {
  const dispatch = useDispatch();
  const { rating, loading, error } = useSelector((state) => state.ratings);

  // Fetch reviews on component mount
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d9a8a8]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {loading ? (
          <p className="text-gray-600 text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-600 text-center">Error: {error}</p>
        ) : (
          <form>
            {/* Overall Rating */}
            <div className="mb-6">
              <label
                htmlFor="rating"
                className="block text-gray-700 font-medium mb-2"
              >
                Overall Rating:
              </label>
              <input
                type="text"
                id="rating"
                value={rating ? rating.toFixed(1) + " Stars" : "No Ratings"}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* View Reviews Button */}
            <div className="text-center">
              <button
                type="button"
                className="bg-[#720000] text-white font-medium px-8 py-2 rounded-md hover:bg-[#580000] transition duration-200 shadow-md"
              >
                View Reviews
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ViewRating;
