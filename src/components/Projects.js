import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <i className="uil uil-code-branch"></i>
            <h3>STUDENT TEACHER APOINTMENT</h3>
            <p>I designed and implemented a Student-Teacher Appointment Booking System, a web-based application aimed at simplifying the process of scheduling and managing appointments between students and teachers</p>
          </div>
          <div className="project-item">
            <i className="uil uil-code-branch"></i>
            <h3>LOW COST AUTOMATION</h3>
            <p>Designed and implemented a low cost home automation system using Arduino Uno featuring automatic light control, temperature monitoring, and remote access.</p>
          </div>
          <div className="project-item">
            <i className="uil uil-code-branch"></i>
            <h3>LOCO-ALERT</h3>
            <p>Built a app with location-based alerts for public transit users,improving their travel experience</p>
          </div>
          <div className="project-item">
            <i className="uil uil-code-branch"></i>
            <h3>HOTEL TABLE RESERVATION SYSTEM</h3>
            <p>This project is a hotel management system enabling user reservations, hotel manager operations, and viewing recent
            orders with seamless interaction</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
