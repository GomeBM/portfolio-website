import React from "react";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import "./Skills.css";

export const Skills = () => {
  const icons = [
    <FaHtml5 className="skills-skill-icon html-icon" />,
    <IoLogoCss3 className="skills-skill-icon css-icon" />,
    <FaReact className="skills-skill-icon react-icon" />,
    <FaNodeJs className="skills-skill-icon node-icon" />,
    <SiMongodb className="skills-skill-icon mongo-icon" />,
  ];
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Technical skills</h2>
      <div className="skills-content">
        <div className="skills-skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skills-skill">
                <div className="skills-image-container">{icons[id]}</div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
