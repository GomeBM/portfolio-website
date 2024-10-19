import React from "react";
import { getImageURL } from "../../utils";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
    navigate(`/${formattedTitle}`);
  };

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
        <button onClick={handleViewDetails} className="projectCard-link">
          View Details
        </button>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  );
};
