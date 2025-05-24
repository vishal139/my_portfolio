import React from "react";
import "./Projects.css"; // Optional CSS for styling

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="main-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Battery Simulation Dashboard</h3>
          <p>
            Built at Oorja to integrate complex physics-based battery models into an interactive
            web application using Angular, Python (FastAPI), and Plotly.
          </p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">🔗 View Code</a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio built with React and Tailwind CSS to showcase my skills,
            projects, and resume.
          </p>
          <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">🌐 Visit Site</a>
        </div>

        <div className="project-card">
          <h3>Data Entry Automation</h3>
          <p>
            A Python script that automates form filling and validation as part of a certification
            use case with NSDC training.
          </p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">🔗 View Code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
