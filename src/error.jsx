import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen bg-white flex justify-center items-center text-black">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="text-2xl mb-6">Oops! Page not found.</p>
        <p className="mb-8">The page you are looking for might have been moved or deleted.</p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={goBack}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            Go Back
          </button>
          <button
            onClick={goHome}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};


