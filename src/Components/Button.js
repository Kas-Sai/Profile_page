import React, { useState, useRef, useEffect } from 'react';

const Button = ({ type }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const resumes = [
  //  { name: "Data Analyst", url: "https://drive.google.com/file/d/1etRuAGBBGNyzeo4S5zkG4UDqATUVkOGg/view?usp=sharing" }, // Using placeholder URLs for preview
    { name: "Resume", url: "https://drive.google.com/file/d/1FOxS7jWLoDsjU3XqgpR_BwkMdPZ2hS-L/view?usp=sharing" },
  ];

  const handleResumeClick = (file) => {
  window.open(file.url, "_blank"); // opens in a new tab
  setShowDropdown(false);
};

  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClick = () => {
    if (type === "Resume") {
      setShowDropdown(prev => !prev);
    } else if (type === "Contact") {
      handleContactClick();
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const buttonStyle = `
    px-4 py-1.5 
    rounded-full 
    font-bold text-white text-md
    border-[1.5px] sm:border-3 md:border-3 border-[#DB3838]
    bg-gray-470 bg-opacity-40
    backdrop-blur-sm
    shadow-lg
    drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]
    cursor-pointer
    hover:bg-red-500 hover:border-red-[#C30808]
  `;

  return (
    <div className="relative">
      <button className={buttonStyle} onClick={handleButtonClick}>
        {type}
      </button>
      {type === "Resume" && showDropdown && (
        <div className="absolute left-0 mt-2 w-max bg-gray-800 text-white rounded-xl shadow-lg z-50">
          {resumes.map((file) => (
            <button
              key={file.name}
              className="block px-6 py-2 w-full text-left hover:bg-gray-700 hover:rounded-xl text-sm"
              onClick={() => handleResumeClick(file)}
            >
              {file.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;  
