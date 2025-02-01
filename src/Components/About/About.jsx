import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-80"
            src={AboutImg}
            alt="Profile representation"
          />

          <ul>
            {/* Education */}
            <div className="flex gap-6 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="max-w-lg">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Master's in Automotive Software Engineering
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Currently pursuing a Master's degree at Technische Universität
                  Chemnitz, specializing in software development, data analysis,
                  and intelligent systems. My focus areas include AUTOSAR, AI
                  for automotive applications, and embedded systems, with
                  hands-on experience in modern automotive technologies.
                </p>
              </span>
            </div>

            {/* Web Development (Frontend + Backend) */}
            <div className="flex gap-6 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="max-w-lg">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full-Stack Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Passionate about building modern, scalable web applications
                  with React.js, TailwindCSS, JavaScript, PHP, and MySQL.
                  Experienced in API integrations, optimizing database
                  performance, and developing interactive web solutions,
                  including a personal portfolio and dynamic applications.
                </p>
              </span>
            </div>

            {/* Machine Learning & Data Science */}
            <div className="flex gap-6 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="max-w-lg">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Science & Machine Learning Practitioner
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in machine learning, data visualization, and AI-driven
                  solutions. Proficient in Python, Pandas, NumPy, Scikit-learn,
                  and PyTorch, with experience in developing AI-powered
                  applications, predictive models, and insightful data analysis.
                  Completed an internship at Edureka, where I worked on
                  real-world business problems using advanced analytics.
                </p>
              </span>
            </div>

            {/* IoT & Smart Systems */}
            <div className="flex gap-6 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="max-w-lg">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  IoT & Smart Systems Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Developed an IoT-based water quality monitoring system capable
                  of measuring pH, oxygen levels, temperature, and turbidity
                  with high accuracy. Designed for practical applications in
                  agriculture, industrial water purification, and smart city
                  infrastructure, providing real-time monitoring through a
                  user-friendly mobile interface.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
