import React from "react";
import { getImageURL } from "../../utils";
import "./Contact.css";

export const Contact = () => {
  return (
    <footer id="contact" className="contact-container">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="contact-links">
        <li className="contact-link">
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:gomebenmoshe@gmail.com">gomebenmoshe@gmail.com</a>
        </li>
        <li className="contact-link">
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="https://www.linkedin.com/in/gome-ben-moshe-07100a207/">
            Linkdin
          </a>
        </li>
        <li className="contact-link">
          <img src={getImageURL("contact/githubIcon.png")} alt="Git icon" />
          <a href="https://github.com/GomeBM">https://github.com/GomeBM</a>
        </li>
      </ul>
    </footer>
  );
};
