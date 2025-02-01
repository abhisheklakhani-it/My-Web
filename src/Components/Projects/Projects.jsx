import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        {/* AI Chatbot */}
        <ProjectCard
          title="AI Chatbot with NLP"
          main="Developed an AI-powered chatbot using Deep Learning and NLP techniques, achieving 80% accuracy. Built with Python, NLTK, and Scikit-learn."
        />
        
        {/* IoT Water Quality Monitoring */}
        <ProjectCard
          title="IoT-Based Water Quality Monitoring"
          main="Designed a smart system to measure pH, temperature, oxygen levels, and turbidity with 90% accuracy. Data visualization via a mobile app."
        />

        {/* Budget Tracker */}
        <ProjectCard
          title="Budget Tracker"
          main="Built a financial management tool to track income and expenses, visualize spending patterns, and generate reports using Matplotlib and Python."
        />

        {/* Portfolio Website */}
        <ProjectCard
          title="Portfolio Website"
          main="Created a personal portfolio showcasing projects and skills using React.js, Tailwind CSS, and JavaScript."
        />
      </div>
    </div>
  );
};

export default Projects;
