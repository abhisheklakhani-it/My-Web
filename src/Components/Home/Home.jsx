import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Passionate software developer specializing in web development, data
          science, and IoT. Currently pursuing a Master's in Automotive Software
          Engineering at TU Chemnitz.
        </p>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
          Skilled in React.js, JavaScript, Python, PHP, and machine learning.
          Enthusiastic about innovation, AI, and entrepreneurship.
        </p>

        {/* Contact Me Button with Smooth Scroll */}
        <a href="#Footer" className="block">
          <button
            className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
            hover:opacity-85 transition-all duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="md:w-80" src={avatarImg} alt="Profile Avatar" />
      </div>
    </div>
  );
};

export default Home;
