import React from 'react';

// This is a functional React component that renders a "Not Deployed" page.
// It's designed to be used as a placeholder for projects that are not yet live.
const NotDeployed = () => {
  // Replace this with the actual URL of your portfolio.
  const portfolioUrl = 'https://your-portfolio-website.com';

  const goBack = () => {
    // This function navigates the user to the portfolio URL.
    window.location.href = portfolioUrl;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white font-sans" id="deploy">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-2xl max-w-md w-full mx-4">
        <svg
          className="mx-auto h-16 w-16 text-yellow-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h1 className="text-4xl font-bold text-white mb-2">Coming Soon!</h1>
        <p className="text-lg text-gray-300 mb-6">
          This project has not been deployed yet. Please check back later or return to my portfolio.
        </p>
        <button
          onClick={goBack}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back to Portfolio
        </button>
      </div>
    </div>
  );
};

export default NotDeployed;
