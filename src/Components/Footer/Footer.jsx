import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXing } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="bg-[#171d32] text-white py-10 px-6 md:px-20">
      {/* Upper Section: Title & Contact Info */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black bg-opacity-40 p-6 rounded-lg border border-gray-700 shadow-md">
        {/* Left Section - Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">Let's Connect</h1>
          <p className="text-md md:text-lg font-light mt-2 text-gray-300">
            Feel free to reach out for collaborations or opportunities!
          </p>
        </div>

        {/* Right Section - Contact Info Below Title */}
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 text-gray-300">
          <div className="flex items-center gap-3">
            <MdOutlineEmail size={22} className="text-blue-400" />
            <span className="hover:text-gray-100 transition duration-300">
              lakhaniabhi.it@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <CiLinkedin size={22} className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/abhishek-lakhani-4896271a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 hover:underline transition duration-300"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <FaXing size={22} className="text-green-500" />
            <a
              href="https://www.xing.com/profile/Abhishek_Lakhani/web_profiles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 hover:underline transition duration-300"
            >
              Xing
            </a>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <FaGithub size={22} className="text-gray-300" />
            <a
              href="https://github.com/abhisheklakhani-it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 hover:underline transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Lower Section: Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 pt-4">
        © {new Date().getFullYear()} <strong>Abhishek Lakhani</strong> | All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
