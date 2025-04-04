import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am passionate about web development, networking, and operating systems. 
            With hands-on experience in diverse languages and tools, I enjoy solving complex 
            problems and building creative solutions. In my spare time, I work on personal 
            projects to sharpen my technical skills and improve efficiency in daily tasks.
          </p>
          <a href={`${process.env.PUBLIC_URL}/Jeevan_Resume.pdf`} className="btn" download>
            Download CV <i className="uil uil-file-alt"></i>
          </a>
        </div>
        <div className="skills-content">
          <h3>Skills</h3>
          <div className="skills-section">
            <h4>Frontend</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>typescipt</li>
              <li>Flutter</li>
            </ul>
          </div>
          <div className="skills-section">
            <h4>Backend</h4>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skills-section">
            <h4>Database</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
