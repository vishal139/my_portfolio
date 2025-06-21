import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <section id="home" className="section">
          <Home/>
        </section>

        <section id="skills" className="section">
          <Skill/>
        </section>

        <section id="projects" className="section">
          <Projects/>
        </section>

        <section id="experience" className="section">
          <Experience/>
        </section>

        <section id="contact" className="section">
          <Contact/>
        </section>
      </main>
    </>
  );
}

export default App;
