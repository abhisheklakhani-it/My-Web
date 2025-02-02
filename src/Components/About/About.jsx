import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      {/* Profile Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          className="md:h-80 rounded-lg shadow-lg"
          src={AboutImg}
          alt="Profile representation"
        />
      </div>

      {/* About Section */}
      <div className="md:w-2/3 mt-8 md:mt-0 md:pl-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          About Me
        </h2>

        <div className="mt-6 space-y-6">
          {/* Education */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-blue-500" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Master’s in Automotive Software Engineering
              </h3>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Pursuing my{" "}
                <strong>Master’s at Technische Universität Chemnitz</strong>,
                specializing in{" "}
                <strong>automotive software, AI, and embedded systems</strong>.
                Passionate about building cutting-edge solutions for the
                automotive industry.
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-blue-500" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Full-Stack Web Developer
              </h3>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Experienced in{" "}
                <strong>
                  React.js, TailwindCSS, JavaScript, PHP, and MySQL
                </strong>
                . Developed multiple projects, including **scalable web apps and
                APIs**, focusing on user experience and performance.
              </p>
            </div>
          </div>

          {/* Data Science & AI */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={30} className="text-blue-500" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Data Science & Machine Learning
              </h3>
              <p className="text-sm md:text-md leading-relaxed text-gray-300">
                Strong foundation in **AI, predictive modeling, and
                automation**. Proficient in **Python, TensorFlow, and
                Scikit-learn**. Developed **AI chatbots and real-time analytics
                dashboards**.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
