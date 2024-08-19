import React from "react";
import "./Hero.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, i'm Gome</h1>
        <p className="hero-description">
          I'm a full stack-developer with experience in React and nodeJS. <br />
          Reach out if you'd like to learn more
        </p>
        <a className="hero-contact-btn" href="mailto:gomebenmoshe@gmail.com">
          Contact me{" "}
        </a>
      </div>
      <img
        className="hero-img"
        src={getImageURL("hero/heroMe.png")}
        alt="Hero image of me"
      />
      <div className="top-blur" />
      <div className="bottom-blur" />
    </section>
  );
};
