import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Triggers when 30% of the element is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-content">
        <h2>For Contact</h2>
        <div className={`letter-image ${isVisible ? 'opened' : 'closed'}`}>
          <div className="animated-mail">
            <div className="back-fold"></div>
            <div className="letter">
              <div className="letter-border"></div>
              <p><strong>Email:</strong> jeevanchandiramohan.77@gmail.com</p>
              <p><strong>Phone:</strong> 6382813513</p>
              <div className="letter-stamp"></div>
            </div>
            <div className="top-fold"></div>
            <div className="body"></div>
            <div className="left-fold"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
