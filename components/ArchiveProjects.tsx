import React, { useState } from "react";
import ArchiveProjectCard from "./ArchiveProjectCard";
import { motion } from "framer-motion";

const ArchiveProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const archiveProjects = [
    {
      id: "1",
      title: "Project Title 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "2",
      title: "Project Title 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "3",
      title: "Project Title 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "4",
      title: "Project Title 4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "5",
      title: "Project Title 5",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "6",
      title: "Project Title 6",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "7",
      title: "Project Title 7",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "8",
      title: "Project Title 8",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "9",
      title: "Project Title 9",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "10",
      title: "Project Title 10",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "11",
      title: "Project Title 11",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
    {
      id: "12",
      title: "Project Title 12",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus a optio dolorem ea dolor laudantium eum exercitationem quibusdam aliquid voluptas!",
      techstack: ["ReactJS", "NodeJS", "MongoDB"],
      url: "https://google.com",
    },
  ];
  const [projectsToShow, setProjectsToShow] = useState(
    archiveProjects.slice(0, 6)
  );

  const handleShowProjectClick = () => {
    if (showMore) {
      setShowMore(false);
      setProjectsToShow(archiveProjects.slice(0, 6));
    } else {
      setShowMore(true);
      setProjectsToShow(archiveProjects);
    }
  };

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {projectsToShow.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (index + 1) / 10 }}
          >
            <ArchiveProjectCard key={project.id} project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <button
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          onClick={handleShowProjectClick}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ArchiveProjects;
