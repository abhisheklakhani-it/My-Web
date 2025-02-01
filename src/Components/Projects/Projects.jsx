import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "Budget Tracker",
      description:
        "A Python application to manage income and expenses, providing visualizations of spending patterns.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/budget-tracker",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A classic Tic Tac Toe game implemented in JavaScript with a sleek user interface.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/TicTacToe",
    },
    {
      title: "To-Do List",
      description:
        "A Python-based to-do list application to keep track of tasks with a simple command-line interface.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/todo_list",
    },
    {
      title: "Weather App",
      description:
        "A Python application that fetches and displays weather information for various locations.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/WeatherApp",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React.js to showcase projects and skills.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/Portfolio",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "A simple Rock Paper Scissors game implemented in JavaScript.",
      demoLink: "#", // Replace with actual demo link if available
      codeLink: "https://github.com/abhisheklakhani-it/RockPaperScissors",
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
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
