import React from "react";
import vishalImg from "../assets/images/b1.jpg"; // Adjust the path as needed
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img src={vishalImg} alt="Vishal Kachhap" className="profile-pic" />
      <div className="home-text">
        <h1 className="main-title">Hello, I'm Vishal Kachhap</h1>
        <p>
          I'm a Full Stack Developer at <strong>Oorja</strong>, where I focus on building
          user interfaces and integrating complex battery physics solutions developed by our
          domain experts into production-ready applications.
        </p>
        <p>
          With over 4 years of experience, I specialize in Python, Angular, Node.js, and
          React. I work at the intersection of software engineering and battery science to
          make technical insights accessible through clean, responsive web apps.
        </p>
        <p>
          I’m also an alumnus of Jawahar Navodaya Vidyalaya and IIT Kharagpur.
        </p>
      </div>
    </div>
  );
}

export default Home;
