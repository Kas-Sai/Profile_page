import React, { useState, useRef, useEffect } from 'react';

const Footer = () => (
    <footer id="animated-footer" className="bg-black py-6 flex justify-center items-center overflow-hidden hidden sm:block md:block">
        <style>{`@keyframes slideIn { 0% { transform: translateX(-150%); } 100% { transform: translateX(150%); } } @keyframes glow { 0%, 100% { filter: drop-shadow(0 0 4px #2292f1) drop-shadow(0 0 8px #2292f1); stroke-opacity: 0.6; } 50% { filter: drop-shadow(0 0 12px #2292f1) drop-shadow(0 0 24px #2292f1); stroke-opacity: 1; } } #animated-footer .sliding-arrows { animation: slideIn 4s linear infinite; } #animated-footer .chevron { animation: glow 1.8s ease-in-out infinite; } #animated-footer .chevron:nth-child(1) { animation-delay: 0.8s; } #animated-footer .chevron:nth-child(2) { animation-delay: 0.6s; } #animated-footer .chevron:nth-child(3) { animation-delay: 0.4s; } #animated-footer .chevron:nth-child(4) { animation-delay: 0.2s; } #animated-footer .chevron:nth-child(5) { animation-delay: 0s; }`}</style>
        <svg width="250" height="60" viewBox="0 0 250 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="sliding-arrows">
            <path d="M30 10 L55 30 L30 50" stroke="#2292f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="chevron" />
            <path d="M70 10 L95 30 L70 50" stroke="#2292f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="chevron" />
            <path d="M110 10 L135 30 L110 50" stroke="#2292f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="chevron" />
            <path d="M150 10 L175 30 L150 50" stroke="#2292f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="chevron" />
            <path d="M190 10 L215 30 L190 50" stroke="#2292f1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="chevron" />
        </svg>
    </footer>
);

export default Footer;