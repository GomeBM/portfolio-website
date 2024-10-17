import React from "react";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";
import { FaHtml5, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiPostman } from "react-icons/si";
import "./Skills.css";

export const Skills = () => {
  const icons = [];

  const languagesIcons = [
    <IoLogoJavascript className="skills-skill-icon javascript-icon" />,
    <FaJava className="skills-skill-icon java-icon" />,
    <FaPython className="skills-skill-icon python-icon" />,
  ];

  const frontEndIcons = [
    <FaHtml5 className="skills-skill-icon html-icon" />,
    <IoLogoCss3 className="skills-skill-icon css-icon" />,
    <FaReact className="skills-skill-icon react-icon" />,
  ];

  const backEndIcons = [
    <FaNodeJs className="skills-skill-icon node-icon" />,
    <SiMongodb className="skills-skill-icon mongo-icon" />,
    <SiPostman className="skills-skill-icon postman-icon" />,
  ];

  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Technical skills</h2>
      <div className="skills-content">
        <div className="skills-skills">
          <h2 className="skills-group-title">Front End Skills:</h2>
          <div className="skills-icons">
            {skills.frontEndSkills.map((skill, id) => {
              return (
                <div key={id} className="skills-skill">
                  <div className="skills-image-container">
                    {frontEndIcons[id]}
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-skills">
          <h2 className="skills-group-title">Back End Skills:</h2>
          <div className="skills-icons">
            {skills.backEndSkills.map((skill, id) => {
              return (
                <div key={id} className="skills-skill">
                  <div className="skills-image-container">
                    {backEndIcons[id]}
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-skills">
          <h2 className="skills-group-title">Programming Languages:</h2>
          <div className="skills-icons">
            {skills.programmingLanguages.map((skill, id) => {
              return (
                <div key={id} className="skills-skill">
                  <div className="skills-image-container">
                    {languagesIcons[id]}
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
