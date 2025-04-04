import React, { useEffect } from 'react';
import './Home.css';
import Typed from 'typed.js';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';  // Import LeetCode Icon

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Developer", "Designer", "Learner"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };
    const typed = new Typed(".typedText", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-content">
          <h1>I'm a <span className="typedText"></span></h1>
          <p>
            Passionate about web development, networking, and operating systems, with hands-on experience in diverse languages and tools. 
            I enjoy solving complex problems and building creative solutions. 
            In my spare time, I work on personal projects to sharpen my technical skills and improve efficiency in daily tasks.
          </p>
        </div>
        <div className="home-image">
          <img src={`${process.env.PUBLIC_URL}/avatar.jpg`} alt="Your Image" className="sphere" />
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/j3van.__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jeevan-c-k-546349249" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jeevanck76" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/Jeevanck/" target="_blank" rel="noopener noreferrer">  {/* Replace with your LeetCode URL */}
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
