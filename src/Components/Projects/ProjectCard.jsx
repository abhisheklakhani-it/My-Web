import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, description, demoLink, codeLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4 rounded-lg"
        src={bannerImg}
        alt={`${title} Preview`}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {description}
      </p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {demoLink && demoLink !== "#" && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:bg-opacity-80 hover:scale-105 transition-all duration-300 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:bg-opacity-80 hover:scale-105 transition-all duration-300 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
