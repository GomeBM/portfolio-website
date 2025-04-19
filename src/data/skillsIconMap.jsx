// skillsIconMap.jsx
import { FaHtml5, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

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
  MySQL: <SiMysql className="skills-skill-icon mysql-icon" />,
  Sequelize: <SiSequelize className="skills-skill-icon sequelize-icon" />,
  Vue: <FaVuejs className="skills-skill-icon vue-icon" />,
};
