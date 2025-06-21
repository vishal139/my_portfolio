import React from "react";
import "./Experience.css"; // Create or reuse styles

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="main-title">Experience</h2>
      <div className="experience-grid">

        <div className="experience-card">
          <h3>Full Stack Developer – Oorja</h3>
          <p className="experience-duration">Feb 2024 – Present</p>
          <p>
            Developed a simulation dashboard to visualize complex battery physics models using Angular and Python (FastAPI).
            Integrated dynamic Plotly charts and built APIs for physics simulation results.
          </p>
          <span className="tech-stack">Tech: Angular, FastAPI, Plotly, MongoDB</span>
        </div>

        <div className="experience-card">
          <h3>NSDC Trainee – Data Entry Automation</h3>
          <p className="experience-duration">2023</p>
          <p>
            Built automation scripts for form filling and data validation during the NSDC Domestic Data Entry Operator certification.
            Increased efficiency in training exercises.
          </p>
          <span className="tech-stack">Tech: Python, Excel, Selenium</span>
        </div>

        <div className="experience-card">
          <h3>Tata Electronics – System Operator</h3>
          <p className="experience-duration">2022</p>
          <p>
            Worked on quality analysis and system tracking for high-precision manufacturing. 
            Gained hands-on experience with data accuracy and documentation.
          </p>
          <span className="tech-stack">Tech: SAP, Excel, QA tools</span>
        </div>

      </div>
    </div>
  );
}

export default Experience;
