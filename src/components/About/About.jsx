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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, placeat. Ut aut rem soluta.
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageURL("about/serverIcon.png")} alt="cursor icon" />
            <div className="about-item-text">
              <h3>Backend developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, placeat. Ut aut rem soluta.
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageURL("about/uiIcon.png")} alt="UI icon" />
            <div className="about-item-text">
              <h3>UI designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, placeat. Ut aut rem soluta.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
