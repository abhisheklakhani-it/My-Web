import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Left Section - Introduction */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-tight tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-xl tracking-tight mt-4 text-gray-300">
          I am a passionate <strong>Software Developer</strong> specializing in{" "}
          <strong>web development, data science, and IoT solutions</strong>.
          Currently pursuing a{" "}
          <strong>Master’s in Automotive Software Engineering</strong> at{" "}
          <strong>Technische Universität Chemnitz</strong>, I thrive on solving
          complex problems with innovative technology.
        </p>

        <p className="text-sm md:text-xl tracking-tight mt-4 text-gray-300">
          My expertise includes{" "}
          <strong>
            React.js, JavaScript, Python, PHP, and machine learning
          </strong>
          . I am deeply interested in{" "}
          <strong>AI, cloud computing, and automation</strong>, always exploring
          new ways to drive efficiency and innovation in software development.
        </p>

        {/* Contact Me Button with Smooth Scroll */}
        <a href="#Footer" className="block mt-6">
          <button
            className="text-white py-3 px-5 text-md md:text-lg md:py-3 md:px-6 
            hover:opacity-85 transition-all duration-300 hover:scale-105 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"
          >
            Contact Me
          </button>
        </a>
      </div>

      {/* Right Section - Profile Image */}
      <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
        <img
          className="md:w-80 rounded-full shadow-lg border-4 border-indigo-500"
          src={avatarImg}
          alt="Profile Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
