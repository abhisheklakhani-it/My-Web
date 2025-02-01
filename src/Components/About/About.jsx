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
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            {/* Education */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Master Student - Automotive Software Engineering
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Currently pursuing a **Master’s in Automotive Software Engineering** at 
                  **Technische Universität Chemnitz**, with a focus on software development, data analysis, 
                  and intelligent systems.
                </p>
              </span>
            </div>

            {/* Web Development (Frontend + Backend) */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full-Stack Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experience in **frontend and backend development** using **React.js, JavaScript, PHP, 
                  MySQL, and TailwindCSS**. Worked on multiple projects, including a **personal portfolio 
                  website and interactive web applications**.
                </p>
              </span>
            </div>

            {/* Machine Learning & Data Science */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Science & Machine Learning Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Passionate about **data science and machine learning**, with experience in **Python, Pandas, 
                  NumPy, Scikit-learn, and PyTorch**. Developed an **AI-powered chatbot** and worked on data 
                  visualization and prediction models.
                </p>
              </span>
            </div>

            {/* IoT & Smart Systems */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  IoT & Smart Systems Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Designed and developed **an IoT-based water quality measurement system** capable of 
                  measuring **pH, oxygen levels, temperature, and turbidity** with **90% accuracy**.
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
