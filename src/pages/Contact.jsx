import React from 'react';
import contactsBg from '../assets/contacts.png';

const Contact = () => {
  return (
    <section 
      className="contact-wrapper" 
      id="contact" 
      style={{ backgroundImage: `url(${contactsBg})` }}
    >
      <div className="contact-overlay">
        <div className="contact-content">
          
          {/* Left Side: Info */}
          <div className="contact-info-side">
            <h1 className="contact-title">Ready to Transform Your Life?</h1>
            <br></br>
            <br></br>
            <br></br>
            <p className="contact-subtitle">
              Join us and other entrepreneurs as we build a better tech-driven future together.
            </p>
            <br></br>
            <br></br>
            <div className="contact-details-list">
              <div className="detail-item">
                <div className="icon-box"><a href="mailto:josephmotshana137@gmail.com">✉️</a></div>
                <a href="mailto:josephmotshana137@gmail.com" className="contact-link">josephmotshana137@gmail.com</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="tel:+27842207128">📞</a></div>
                <a href="tel:+27842207128" className="contact-link">+27 84 220 7128</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="https://x.com/your_handle" target="_blank" rel="noopener noreferrer">𝕏</a></div>
                <a href="https://x.com/your_handle" target="_blank" rel="noopener noreferrer" className="contact-link">X (Twitter)</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">in</a></div>
                <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form-card">
            <h3 className="form-title">Get Started Today</h3>
            <form action="https://formspree.io/f/xkogdjbr" method="POST" className="contact-form">
              <div className="input-group">
                <label htmlFor="full-name">Full Name</label>
                <input id="full-name" type="text" name="name" placeholder="Enter name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Enter email" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="How can we help?" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message →</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;