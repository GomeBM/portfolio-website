import React from "react";
import { getImageURL } from "../../utils";
import "./About.css";

export const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="me about"
          className="about-image"
        />
        <ul className="about-items">
          <li className="about-item">
            <img src={getImageURL("about/cursorIcon.png")} alt="cursor icon" />
            <div className="about-item-text">
              <h3>Frontend developer</h3>
              <p>
                I have hands on experience with building beautifull client side
                applications both for the android platform using java and for
                the web using React and javascript
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageURL("about/serverIcon.png")} alt="cursor icon" />
            <div className="about-item-text">
              <h3>Backend developer</h3>
              <p>
                I have hands on experience with building the server side of
                several mobile and web apps.
                <br /> mainly using Express and MongoDB.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
