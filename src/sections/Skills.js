import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
    const analyticSkills = [{ name: 'Python', percentage: 50 }, { name: 'Tableau', percentage: 65 }, { name: 'Microsoft 365', percentage: 95 }, { name: 'Mysql', percentage: 80 }, { name: 'Powerbi', percentage: 50 }];
    const developerSkills = [{ name: 'HTML', percentage: 90 }, { name: 'JavaScript', percentage: 65 }, { name: 'C', percentage: 70 }, { name: 'MongoDB', percentage: 60 }, { name: 'Java', percentage: 50 }, { name: 'CSS', percentage: 80 }, { name: 'C++', percentage: 70 }, { name: 'Figma', percentage: 90 }, { name: 'MERN', percentage: 60 }];
    const SkillBar = ({ name, percentage }) => ( <div className="mb-4"> <div className="flex justify-between items-center mb-1"> <span className="font-medium text-gray-200">{name}</span> <span className="text-sm font-medium text-gray-100">{percentage}%</span> </div> <div className="w-full bg-gray-600 rounded-full h-1.5"> <div className="bg-red-600 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div> </div> </div> );
    return (
        <section className="text-white py-16 px-6 md:px-8 font-sans
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 tracking-wider text-center md:text-left">My Skills</h2>
                <div className="mb-16 hidden">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Analytic Skills</h3>
                    <div className="bg-[#474747]/20 p-8 rounded-2xl shadow-lg backdrop-blur-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">{analyticSkills.map((skill) => <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />)}</div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Developer Skills</h3>
                    <div className="bg-[#474747]/20 p-8 rounded-2xl shadow-lg backdrop-blur-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">{developerSkills.map((skill) => <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
