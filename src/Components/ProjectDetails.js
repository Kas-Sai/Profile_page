import React, { useState } from "react";

export const dataAnalystProjects = [
  {
    id: "da1",
    title: "Layoff Data Analysis",
    description:
      "Cleaned the company layoff dataset by removing duplicates, handling missing or inconsistent values, and standardizing dates, locations, and numeric fields.",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/layoffs.png?raw=true",
    codeUrl: "https://github.com/Kas-Sai/Employee_layoff", // repo / code link
    liveUrl: "#", // deployment / live site link
  },
];

export const fullStackProjects = [
  {
    id: "fs1",
    title: "Shoe Landing Page",
    description:
      "This React.js landing page showcases a modern shoe brand with a sleek, responsive design.",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/ShoeLanding.PNG?raw=true",
    codeUrl: "https://github.com/Kas-Sai/Shoe-landing-page",
    liveUrl: "https://arceusshoesite-git-master-kas-sais-projects.vercel.app",
  },
  {
    id: "fs2",
    title: "Article Site",
    description:
      "It's an article site to read various types of article or news on a daily basis.",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/Article%20site.PNG?raw=true",
    codeUrl: "https://github.com/Kas-Sai/Arceus-Ar.git",
    liveUrl: " https://kas-sai.github.io/Arceus-Ar/",
  },
  {
    id: "fs3",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects.",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/portfolio.png?raw=true",
    codeUrl: "#",
    liveUrl: "#",
  },
  {
    id: "fs4",
    title: "Landing Page",
    description:
      "A car landing site offering different cars at lower prices (non-responsive).",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/carLanding.PNG?raw=true",
    codeUrl: "https://github.com/Kas-Sai/Landing-Page.git",
    liveUrl: "https://kas-sai.github.io/Landing-Page/",
  },
  {
    id: "fs5",
    title: "UI/UX Dashboard Design",
    description:
      "A Figma dashboard design for a book site with community conversation features.",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/User_dashboard_figma.PNG?raw=true",
    codeUrl: "https://www.figma.com/design/wOPiTs9xANzzNx70oy6ruv/User-dashboard?node-id=0-1&t=lJmCfBq90o9MUzII-1",
    liveUrl: "https://www.figma.com/proto/wOPiTs9xANzzNx70oy6ruv/User-dashboard?node-id=0-1",
  },
  {
    id: "fs6",
    title: "LegalEase",
    description:
      " LegalEase is a safe, easy-to-use legal service e-commerce system developed using MERN technology to facilitate smooth case management and legal advice. It facilitates handling documents and linking users with legal experts effectively",
    imageUrl: "https://github.com/Kas-Sai/assets/blob/main/asset/protfolio/Website%20Pages/LegalEase.PNG?raw=true",
    codeUrl: "https://github.com/Vaibhav-cls/LegalEase",
    liveUrl: "#",
  },
];

/* Icon: external link (for live site) */
const ExternalLinkIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

/* Icon: code / repo (simple GitHub-like glyph) */
const CodeIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ProjectDetails = ({ project }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setShowOverlay((prev) => !prev);

      const hideOverlay = () => {
        setShowOverlay(false);
        document.removeEventListener("touchend", hideOverlay);
        document.removeEventListener("touchcancel", hideOverlay);
      };

      document.addEventListener("touchend", hideOverlay);
      document.addEventListener("touchcancel", hideOverlay);
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center p-3 text-center text-white transition-all duration-300 ${
          showOverlay
            ? "bg-opacity-75 opacity-100"
            : "group-hover:bg-opacity-75 group-hover:opacity-100 opacity-0"
        }`}
      >
        <h3 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-xs mb-3 max-w-[90%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {project.description}
        </p>

        {/* Links row: Code (repo) and Live (deployment) */}
        <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
          {/* Code link */}
          <a
            href={project.codeUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-gray-200"
            aria-label={`${project.title} - Code`}
            title="Code"
            onClick={(e) => {
              /* avoid overlay close on mobile when icon clicked; let default navigation happen */
              e.stopPropagation();
            }}
          >
            <span className="inline-flex items-center justify-center p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-40 hover:bg-red-800">
              <CodeIcon />
            </span>
            <span className="text-[10px] mt-1">Code</span>
          </a>

          {/* Live link */}
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-gray-200 "
            aria-label={`${project.title} - Live site`}
            title="Live site"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className="inline-flex items-center justify-center p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-40 hover:bg-green-700">
              <ExternalLinkIcon />
            </span>
            <span className="text-[10px] mt-1">Live</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
