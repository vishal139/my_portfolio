import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="main-title">Contact</h2>
      <div className="contact-card">
        <p className="contact-text">
          I'd love to hear from you! Whether you have a question, a project
          idea, or just want to say hi — feel free to reach out.
        </p>

        <div className="contact-details">
          <p>
            📧 Email:{" "}
            <a href="mailto:vishal.kachhap@example.com">
              vishal.kachhap@example.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/vishal-kachhap"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/vishal-kachhap
            </a>
          </p>
          <p>📍 Location: Bengaluru, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
