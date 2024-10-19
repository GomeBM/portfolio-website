// import React, { useState } from "react";
// import "./Navbar.css";
// import { getImageURL } from "../../utils";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <nav className="navbar">
//       <a className="title" href="/">
//         Portfolio
//       </a>
//       <div className="menu">
//         <img
//           className="menu-btn"
//           src={
//             menuOpen
//               ? getImageURL("nav/closeIcon.png")
//               : getImageURL("nav/menuIcon.png")
//           }
//           alt="menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//         <ul
//           className={`menu-items ${menuOpen ? "menuOpen" : ""}`}
//           onClick={() => setMenuOpen(false)}
//         >
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#skills">Technical skills</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { getImageURL } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current path matches the project detail path pattern
  const isProjectDetailPage =
    location.pathname !== "/" && location.pathname.startsWith("/");

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      {!isProjectDetailPage && (
        <div className="menu">
          <img
            className="menu-btn"
            src={
              menuOpen
                ? getImageURL("nav/closeIcon.png")
                : getImageURL("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`menu-items ${menuOpen ? "menuOpen" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Technical skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
