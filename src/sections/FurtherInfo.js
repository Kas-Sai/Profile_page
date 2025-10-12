import React, { useState, useRef, useEffect } from 'react';

const FurtherInfo = () => {
    const achievementsData = { title: 'Achievements', items: ['4-Star C++ Programmer in hacker rank', 'Done Event Management Within college and Outdoor'] };
    const certificatesData = { title: 'Certificates', items: ["Boltlot's Front-End Web Development Training Program", 'EduSkills Android Developer Virtual Internship', 'Full-Stack Training and Internship at Thought Applied Creations'] };
    const internshipData = { title: 'Internship', items: ["Boltlot's Front-End Web Development Internship", 'Full-Stack Internship at Thought Applied Creation'] };
    const InfoCard = ({ title, items }) => ( <div className="bg-gray-700/60 p-6 rounded-lg shadow-lg h-full transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"> <h3 className="text-xl font-bold text-white mb-4">{title}</h3> <ul> {items.map((item, index) => ( <li key={index} className="flex items-start mb-2"> <span className="flex-shrink-0 mt-1 mr-3"> <svg height="30" width="10" xmlns="http://www.w3.org/2000/svg"> <circle r="4" cx="5" cy="6" stroke="rgb(239 68 68)" strokeWidth="1.5" fill="transparent" /> </svg> </span> <span className="text-gray-300 text-md">{item}</span> </li> ))} </ul> </div> );
    return (
        <section className="text-white py-16 px-6 md:px-8 font-sans 
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="max-w-4xl mx-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h2 className="text-3xl font-bold mb-12 tracking-wider uppercase text-center md:text-left">Further Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col gap-8"><InfoCard title={achievementsData.title} items={achievementsData.items} /><InfoCard title={internshipData.title} items={internshipData.items} /></div>
                    <div><InfoCard title={certificatesData.title} items={certificatesData.items} /></div>
                </div>
            </div>
        </section>
    );
};

export default FurtherInfo;