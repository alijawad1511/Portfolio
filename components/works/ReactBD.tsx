import { animate, motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer{" "}
        <span className="text-textGreen tracking-wide">@ReactBD</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 23 - Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write clean and properly documented code for a diverse array of
          clients and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, Wordpress, Prismic and Netlify
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers and clients on a daily basis.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
