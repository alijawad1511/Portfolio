import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { projectImage1, projectImage2 } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const ProjectSection = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle titleNumber="04" title="Some Projects I have Built" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project Image */}
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="#"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full"
                  src={projectImage1}
                  alt="Project Image 1"
                />
              </div>
            </a>
            {/* Project Text */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Food Website</h3>
              <p className="bg-[#112248] text-sm md:text-base p-2 md:p-6 xl:-ml-16 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ipsum facilis voluptas harum pariatur repudiandae
                provident non officia dolores,{" "}
                <span className="text-textGreen">aspernatur</span> sunt velit
                sit, eius similique. Eum asperiores repellat{" "}
                <span className="text-textGreen">laudantium</span> aliquid.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project Image */}
          <div className="flex flex-col xl:flex-row-reverse gap-6 items-center">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="#"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full"
                  src={projectImage2}
                  alt="Project Image 2"
                />
              </div>
            </a>
            {/* Project Text */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Food Website</h3>
              <p className="bg-[#112248] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ipsum facilis voluptas harum pariatur repudiandae
                provident non officia dolores,{" "}
                <span className="text-textGreen">aspernatur</span> sunt velit
                sit, eius similique. Eum asperiores repellat{" "}
                <span className="text-textGreen">laudantium</span> aliquid.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project Image */}
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="#"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full"
                  src={projectImage2}
                  alt="Project Image 2"
                />
              </div>
            </a>
            {/* Project Text */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Food Website</h3>
              <p className="bg-[#112248] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ipsum facilis voluptas harum pariatur repudiandae
                provident non officia dolores,{" "}
                <span className="text-textGreen">aspernatur</span> sunt velit
                sit, eius similique. Eum asperiores repellat{" "}
                <span className="text-textGreen">laudantium</span> aliquid.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="#"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
