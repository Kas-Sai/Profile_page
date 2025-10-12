import React, { useState, useRef, useEffect } from 'react';const Education = () => {
    const educationData = [{ degree: 'Senior High School', institution: 'Rambo Memorial English Medium Higher Secondary School Mungeli C.G', years: '2020-2021', link: '#' }, { degree: 'Bachelor of technology', institution: 'Shri Shankaracharya Institute of Professional Management and technology', years: '2021-2025', link: '#' }];
    const EducationLinkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> );
    return (
        <section className="text-white py-16 px-6 md:px-8 font-sans 
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 tracking-wider uppercase text-center md:text-left">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <a key={index} href={edu.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="bg-[#474747]/20 p-6 rounded-2xl h-full flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <div><h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3><p className="text-gray-300 mb-3">{edu.institution}</p></div>
                                <div className="flex justify-between items-center mt-4"><p className="text-gray-300 text-sm">{edu.years}</p><EducationLinkIcon /></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Education;