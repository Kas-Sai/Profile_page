// ProfileDetail.js
import React from 'react';
import Button from '@/Components/Button';
import Image from 'next/image';

const ProfileDetail = () => {
  const userData = {
    name: "Sahil Kashyap",
    titles: ["Data Analyst", "Full-Stack Developer", "Coder", "UI/UX Designer"],
    description:
      "💻 I’m a versatile Full-Stack Developer, UI/UX Designer, and Data Analyst passionate about building user-focused, data-driven digital solutions. I create scalable web apps with React, Node.js, MongoDB, and MySQL, design clean and intuitive interfaces, and turn complex data into actionable insights using Python, SQL, Tableau and Power BI. Whether it’s coding, designing, or analyzing, I focus on delivering creative, efficient, and high-quality results.",
  };

  return (
    // Add `relative` and `z-10` here to bring this section to the front
    <section className="relative z-10 px-6 md:px-8 -mt-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto md:flex md:items-end md:gap-x-8">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full md:mb-38 mt-8
           overflow-hidden border-4 border-white dark:border-gray-200 shadow-xl ">
            <Image
              src="https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/profilePic.jpg?raw=true"
              alt="profile picture"
              width={1980}
              height={1080}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="mt-6 md:mt-20 flex-grow">
          <h1 className="text-3xl sm:text-4xl font-bold text-white
           dark:text-white mb-1 drop-shadow-lg
           drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            {userData.name}
          </h1>
          <div className="text-sm text-white dark:text-gray-300 mb-4">
            {userData.titles.map((title, index) => (
              <React.Fragment key={title}>
                {title}
                {index < userData.titles.length - 1 && (
                  <span className="mx-2 text-red-500 font-bold">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-md text-white dark:text-gray-200 mb-6 text-justify">
            {userData.description}
          </p>
          <div className="flex space-x-4">
            <Button type="Resume" />
            <Button type="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetail;
