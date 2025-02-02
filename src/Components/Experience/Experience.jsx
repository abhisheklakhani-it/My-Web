import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiC,
  SiPhp,
  SiMysql,
} from "react-icons/si";

const Experience = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3 size={50} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
    { name: "NumPy", icon: <SiNumpy size={50} color="#013243" /> },
    { name: "Pandas", icon: <SiPandas size={50} color="#150458" /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn size={50} color="#F7931E" /> },
    { name: "PyTorch", icon: <SiPytorch size={50} color="#EE4C2C" /> },
    { name: "C", icon: <SiC size={50} color="#00599C" /> },
    { name: "Java", icon: <FaJava size={50} color="#007396" /> },
    { name: "PHP", icon: <SiPhp size={50} color="#777BB4" /> },
    { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
  ];

  const workExperience = [
    {
      title:
        "Research Intern - Dataset Evaluation & AI Validation, TU Chemnitz",
      duration: "Jan 2025 – Present",
      responsibilities: [
        "Conducting AI model validation to ensure fairness, transparency, and robustness.",
        "Analyzing large datasets using Python, Pandas, and Matplotlib to detect biases.",
        "Implementing machine learning techniques for dataset quality evaluation.",
      ],
    },
    {
      title: "Data Science & Machine Learning Intern - Edureka",
      duration: "Nov 2024 – Present",
      responsibilities: [
        "Gained hands-on experience in Python for data science (Pandas, NumPy, Matplotlib).",
        "Built machine learning models for regression, classification, and clustering.",
        "Developed an AI-powered chatbot using NLP techniques.",
      ],
    },
    {
      title: "PHP Developer Intern - White Orange Software",
      duration: "Oct 2021 – Mar 2022",
      responsibilities: [
        "Developed and maintained web applications using PHP and MySQL.",
        "Optimized database queries, improving performance by 15%.",
        "Worked on API integrations, enhancing system compatibility by 25%.",
      ],
    },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
        Experience
      </h1>

      {/* Parent Container: Side by Side Layout */}
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
        {/* Skills Section */}
        <div className="w-full md:w-1/2 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white text-center"
              >
                <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
                  {skill.icon}
                </span>
                <p className="mt-2 text-sm md:text-md">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="w-full md:w-1/2 bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 text-white"
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm font-light">{job.duration}</p>
              <ul className="text-sm p-2">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>- {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
