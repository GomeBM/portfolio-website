import React from "react";
import { getImageURL } from "../../utils";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const handleDemoClick = (event) => {
    if (demo === "#") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
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
          <a
            href={demo}
            className="projectCard-link"
            target={demo === "#" ? "_self" : "_blank"}
            rel={demo === "#" ? "" : "noopener noreferrer"}
            onClick={handleDemoClick}
          >
            Demo
          </a>
        )}
        <a
          href={source}
          className="projectCard-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};
