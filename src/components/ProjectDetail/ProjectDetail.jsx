import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getImageURL } from "../../utils";
import projects from "../../data/projects.json";
import { skillsIconMap } from "../../data/skillsIconMap"; // Ensure the correct import
import "./ProjectDetail.css";

export const ProjectDetail = () => {
  const { projectTitle } = useParams();
  const project = projects.find(
    (proj) => proj.title.replace(/\s+/g, "-").toLowerCase() === projectTitle
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-title-image-container">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
        <img
          src={getImageURL(project.imageSrc)}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-descriptions-container">
        <h2>Description</h2>
        {project.longDescription && (
          <p className="project-long-description">{project.longDescription}</p>
        )}
      </div>
      <div className="project-skills-outer-container">
        <h2>Tools used for this project</h2>
        <div className="project-skills-container">
          {project.skills.map((skill, id) => (
            <li className="project-skill" key={id}>
              {skillsIconMap[skill] || skill}
              <p className="project-skill-title">{skill}</p>
            </li>
          ))}
        </div>
      </div>
      <div className="project-links-container">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        )}
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </div>
  );
};
