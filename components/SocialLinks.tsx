import { FaGithub } from "react-icons/fa";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";

const SocialLinks = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/alijawad1511" target="_blank">
          <div className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all hover:-translate-y-2 duration-300">
            <FaGithub />
          </div>
        </a>
        <a href="https://linkedin.com/in/alijawad1511" target="_blank">
          <div className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all hover:-translate-y-2 duration-300">
            <SlSocialLinkedin />
          </div>
        </a>
        <a href="https://linkedin.com/in/alijawad1511" target="_blank">
          <div className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all hover:-translate-y-2 duration-300">
            <SlSocialInstagram />
          </div>
        </a>
        <a href="https://linkedin.com/in/alijawad1511" target="_blank">
          <div className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all hover:-translate-y-2 duration-300">
            <SlSocialYoutube />
          </div>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default SocialLinks;
