import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiC, SiPhp, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNumpy color="#013243" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPandas color="#150458" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiScikitlearn color="#F7931E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPytorch color="#EE4C2C" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiC color="#00599C" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPhp color="#777BB4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>

        {/* Experience Section */}
        <div>
          {/* Data Science Intern */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">
                Data Science & Machine Learning Intern, Edureka
              </h2>
              <p className="text-sm leading-tight font-thin">
                2024/11 – Present
              </p>
              <ul className="text-sm p-2">
                <li>- Gained expertise in **Python for Data Science**, working with **Pandas, NumPy, and Matplotlib**.</li>
                <li>- Hands-on practice with **machine learning algorithms**, including regression, classification, and clustering.</li>
                <li>- Developed an **AI chatbot** using **NLP techniques**.</li>
              </ul>
            </span>
          </div>

          {/* PHP Developer Intern */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">
                PHP Developer Intern, White Orange Software
              </h2>
              <p className="text-sm leading-tight font-thin">
                2021/10 – 2022/03
              </p>
              <ul className="text-sm p-2">
                <li>- Developed and maintained web applications using **PHP & MySQL**.</li>
                <li>- Optimized database queries, improving system performance by **15%**.</li>
                <li>- Worked on API integrations, increasing system compatibility by **25%**.</li>
              </ul>
            </span>
          </div>

          {/* Academic Project Work */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">
                Academic Research & IoT Project
              </h2>
              <p className="text-sm leading-tight font-thin">
                2023/05 – 2024/02
              </p>
              <ul className="text-sm p-2">
                <li>- Developed an **IoT-based water quality measurement system**, achieving **90% accuracy**.</li>
                <li>- Integrated **sensors to measure pH, oxygen, turbidity, and temperature**, sending real-time data to a mobile app.</li>
                <li>- Worked with **Python, data visualization, and IoT technologies**.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
