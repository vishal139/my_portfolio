import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Vishal Kachhap
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("home")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("experience")}>Experience</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
