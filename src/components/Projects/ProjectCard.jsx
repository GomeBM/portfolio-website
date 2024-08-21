import React from "react";
import { getImageURL } from "../../utils";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="projectCard-container">
      <img
        src={getImageURL(imageSrc)}
        alt={title}
        className="projectCard-image"
      />
      <h3 className="projectCard-title">{title}</h3>
      <p className="projectCard-description">{description}</p>
      <ul className="projectCard-skills">
        {skills.map((skill, id) => (
          <li key={id} className="projectCard-skill">
            {skill}
          </li>
        ))}
      </ul>
      <div className="projectCard-links">
        {demo && (
          <a href={demo} className="projectCard-link">
            Demo
          </a>
        )}
        <a href={source} className="projectCard-link">
          Source
        </a>
      </div>
    </div>
  );
};
