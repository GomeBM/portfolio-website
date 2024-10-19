// skillsIconMap.jsx
import { FaHtml5, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";

// Map for skill icons
export const skillsIconMap = {
  Javascript: (
    <IoLogoJavascript className="skills-skill-icon javascript-icon" />
  ),
  Java: <FaJava className="skills-skill-icon java-icon" />,
  Python: <FaPython className="skills-skill-icon python-icon" />,
  HTML5: <FaHtml5 className="skills-skill-icon html-icon" />,
  CSS3: <IoLogoCss3 className="skills-skill-icon css-icon" />,
  React: <FaReact className="skills-skill-icon react-icon" />,
  NodeJS: <FaNodeJs className="skills-skill-icon node-icon" />,
  MongoDB: <SiMongodb className="skills-skill-icon mongo-icon" />,
  Postman: <SiPostman className="skills-skill-icon postman-icon" />,
  Express: <SiExpress className="skills-skill-icon express-icon" />,
};
