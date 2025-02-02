import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "Budget Tracker",
      description:
        "A Python application for managing income and expenses, providing insightful visualizations of spending patterns.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/budget-tracker",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A classic Tic Tac Toe game built with JavaScript, featuring a sleek and interactive user interface.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/TicTacToe",
    },
    {
      title: "To-Do List",
      description:
        "A Python-based task manager with a simple command-line interface for keeping track of daily tasks.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/todo_list",
    },
    {
      title: "Weather App",
      description:
        "A Python application that fetches and displays real-time weather information based on user input.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/WeatherApp",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website designed using React.js, showcasing my projects and technical skills.",
      demoLink: "https://abhisheklakhani-it.github.io/My-Web/", // Replace with actual demo link
      codeLink: "https://github.com/abhisheklakhani-it/Portfolio",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "An interactive Rock Paper Scissors game built with JavaScript, providing a fun and engaging experience.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/RockPaperScissors",
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Projects</h1>
      <p className="text-md md:text-lg text-gray-300 text-center mt-3">
        A collection of my latest projects showcasing my expertise in web
        development, Python applications, and interactive games.
      </p>

      <div className="py-12 px-8 flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
