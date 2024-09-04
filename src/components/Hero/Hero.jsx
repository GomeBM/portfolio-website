import React from "react";
import "./Hero.css";
import { getImageURL } from "../../utils";
import { FaFileDownload } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Gome</h1>
        <p className="hero-description">
          I'm a full-stack developer with experience in React and NodeJS. <br />
          Reach out if you'd like to learn more
        </p>
        <a className="hero-contact-btn" href="mailto:gomebenmoshe@gmail.com">
          Contact me{" "}
        </a>
        <a
          className="hero-contact-btn"
          href="/Gome Ben Moshe Resume.pdf"
          download="Gome_Ben_Moshe_CV.pdf"
        >
          <FaFileDownload className="hero-downloadCV-icon" />
          Download CV
        </a>
      </div>
      <img
        className="hero-img"
        src={getImageURL("hero/heroMe.png")}
        alt="Hero image of me"
      />
    </section>
  );
};
