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
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {[
            FaHtml5,
            FaCss3,
            FaJs,
            FaReact,
            FaPython,
            SiNumpy,
            SiPandas,
            SiScikitlearn,
            SiPytorch,
            SiC,
            FaJava,
            SiPhp,
            SiMysql,
          ].map((Icon, index) => (
            <span
              key={index}
              className="p-3 bg-zinc-950 flex items-center rounded-2xl"
            >
              <Icon size={50} />
            </span>
          ))}
        </div>

        {/* Experience Section */}
        <div>
          {/* TU Chemnitz Internship */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-semibold">
                Research Intern - Dataset Evaluation & AI Validation, TU
                Chemnitz
              </h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2025 – Present
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Conducting AI model validation to ensure fairness,
                  transparency, and robustness.
                </li>
                <li>
                  - Analyzing large datasets using Python, Pandas, and
                  Matplotlib to detect biases.
                </li>
                <li>
                  - Implementing machine learning techniques for dataset quality
                  evaluation.
                </li>
              </ul>
            </span>
          </div>

          {/* Data Science Intern - Edureka */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-semibold">
                Data Science & Machine Learning Intern - Edureka
              </h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2024 – Present
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Gained hands-on experience in Python for data science
                  (Pandas, NumPy, Matplotlib).
                </li>
                <li>
                  - Built machine learning models for regression,
                  classification, and clustering.
                </li>
                <li>- Developed an AI-powered chatbot using NLP techniques.</li>
              </ul>
            </span>
          </div>

          {/* PHP Developer Intern - White Orange Software */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight font-semibold">
                PHP Developer Intern - White Orange Software
              </h2>
              <p className="text-sm leading-tight font-thin">
                Oct 2021 – Mar 2022
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Developed and maintained web applications using PHP and
                  MySQL.
                </li>
                <li>
                  - Optimized database queries, improving performance by 15%.
                </li>
                <li>
                  - Worked on API integrations, enhancing system compatibility
                  by 25%.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
