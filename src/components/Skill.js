import React from "react";
import "./Skill.css"; // Optional CSS

function Skill() {
  return (
    <div className="skill-container">
      <h2 className="main-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul className="skill-list">
            <li>⚛️ React.js</li>
            <li>🅰️ Angular</li>
            <li>🎨 HTML5 & CSS3</li>
            <li>📜 JavaScript (ES6+)</li>
            <li>🌬️ Tailwind CSS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul className="skill-list">
            <li>🟢 Node.js</li>
            <li>🐍 Python (Flask)</li>
            <li>🔗 RESTful APIs</li>
            <li>🚂 Express.js</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul className="skill-list">
            <li>🔧 Git & GitHub</li>
            <li>🐳 Docker</li>
            <li>📊 Plotly</li>
            <li>🗃️ MongoDB / PostgreSQL</li>
            <li>💻 🐧 Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
