import React from "react";
import SectionTitle from "./SectionTitle";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleNumber="02" title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Jawad Shah and I love developing web applications.
            My journey into web development began in 2021 while studying a web
            development course at university. I started with HTML, CSS, and
            basic JavaScript, gradually building a strong foundation. I reached
            an intermediate level in CSS, which enabled me to create visually
            appealing web pages.
          </p>
          <p>
            With a solid foundation in these core technologies, I transitioned
            to React.js, where I built several projects to strengthen my
            front-end skills. After reaching an intermediate level with React, I
            expanded my expertise to backend technologies, learning{" "}
            <span className="text-textGreen">Node.js</span> and{" "}
            <span className="text-textGreen">Express.js</span>.
          </p>
          <p>
            Additionally, I acquired knowledge of MongoDB, enabling me to create
            full stack projects. This comprehensive approach allowed me to gain
            a strong command over the{" "}
            <span className="text-textGreen">MERN Stack</span>. As a
            self-learner, I continuously seek to improve and take on new
            challenges in web development.
          </p>
          <p>Here are some technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              JavaScript (ES6/ES7)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              React JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              Node JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              Express JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              Supabase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              Material UI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlineSettingsEthernet />
              </span>
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src="/profile.webp"
                alt="Profile Image"
                layout="fill"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
