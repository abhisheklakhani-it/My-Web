import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXing } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Let's Connect</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out for collaboration or a chat!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <span>lakhaniabhi.it@gmail.com</span>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/abhishek-lakhani-4896271a6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaXing size={20} />
          <a
            href="https://www.xing.com/profile/Abhishek_Lakhani/web_profiles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Xing Profile
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/abhisheklakhani-it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
