import React, { FC } from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Project {
  id: string;
  title: string;
  description: string;
  techstack: string[];
  url: string;
}

interface Props {
  project: Project;
}

const ArchiveProjectCard: FC<Props> = ({ project }) => {
  return (
    <a href={project?.url} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl hover:text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {project?.title}
          </h2>
          <p className="text-sm mt-3">{project?.description}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {project?.techstack?.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveProjectCard;
