// ScrollToTop.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlScrollButton = () => {
    if (window.scrollY < lastScrollY && window.scrollY > 200) {
      // User scrolling up
      setShowButton(true);
    } else {
      // User scrolling down or near top
      setShowButton(false);
    }
    setLastScrollY(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScrollButton);
    return () => {
      window.removeEventListener("scroll", controlScrollButton);
    };
  }, [lastScrollY]);

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 md:right-60 z-50 p-3 rounded-full bg-red-600 text-white shadow-lg cursor-pointer transition-all duration-500 hover:bg-red-700 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-xl" />
    </div>
  );
};

export default ScrollToTop;
