import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ navLinks }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="nav">
      <div
        className={navOpen ? "sideNavSpacerActive" : "sideNavSpacer"}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      ></div>
      <div className="spacer"></div>
      <div
        className="logo"
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      >
        <Link to="/">
          <h1>Mariánka</h1>
          <p>Lesní mateřská škola</p>
        </Link>
      </div>
      <ul
        className={navOpen ? "nav-links nav-active sideNavSpacer" : "nav-links"}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      >
        {navLinks.map((link) => (
          <Link to={link.path}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="burger-container">
        <div className="burger" onClick={() => setNavOpen(!navOpen)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
