import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Amazon from "./works/Amazon";
import Google from "./works/Google";
import Facebook from "./works/Facebook";

const ExperienceSection = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const renderWorkDetail = (index: number) => {
    switch (index) {
      case 0:
        return <ReactBD />;
      case 1:
        return <Google />;
      case 2:
        return <Facebook />;
      case 3:
        return <Amazon />;
    }
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle titleNumber="03" title="Experience" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => setCurrentWorkIndex(0)}
            className={`border-l-2 ${
              currentWorkIndex === 0
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            } text-textDark bg-transparent ${
              currentWorkIndex === 0 ? "bg-[#112240]" : "bg-transparent"
            } hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={() => setCurrentWorkIndex(1)}
            className={`border-l-2 ${
              currentWorkIndex === 1
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            } text-textDark bg-transparent ${
              currentWorkIndex === 1 ? "bg-[#112240]" : "bg-transparent"
            } hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={() => setCurrentWorkIndex(2)}
            className={`border-l-2 ${
              currentWorkIndex === 2
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            } text-textDark bg-transparent ${
              currentWorkIndex === 2 ? "bg-[#112240]" : "bg-transparent"
            } hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Facebook
          </li>
          <li
            onClick={() => setCurrentWorkIndex(3)}
            className={`border-l-2 ${
              currentWorkIndex === 3
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            } text-textDark bg-transparent ${
              currentWorkIndex === 3 ? "bg-[#112240]" : "bg-transparent"
            } hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {renderWorkDetail(currentWorkIndex)}
      </div>
    </section>
  );
};

export default ExperienceSection;
