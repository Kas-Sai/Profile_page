import React from 'react';
import ProjectDetails, {
  dataAnalystProjects,
  fullStackProjects,
} from '@/Components/ProjectDetails';

const Projects = () => (
  <section className="text-white py-16 px-6 md:px-8 font-sans">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 tracking-wider text-center uppercase
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        Projects
      </h2>

      {/* Data Analyst Projects */}
      <div className="mb-16 hidden">
        <h3 className="text-2xl font-semibold mb-8 text-gray-300 text-center md:text-left
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Data Analyst Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataAnalystProjects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Full Stack Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-gray-300 text-center md:text-left
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-black
          sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
          md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            { /* Full Stack Projects */}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullStackProjects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
