import React from 'react';
import contactsBg from '../assets/contacts.png';

const Contact = () => {
  return (
    <section 
      className="contact-wrapper" 
      id="contact" 
      style={{ backgroundImage: `url(${contactsBg})` }}
    >
      {/* --- INVISIBLE SEO SECTION --- */}
      <title>Contact ACTS Quadrant | Software Solutions in South Africa</title>
      <meta name="description" content="Get in touch with ACTS Quadrant for web design,Mobile App application, software development, and hosting inquiries. Based in South Africa, serving global clients." />
      <meta name="keywords" content="Contact ACTS Quadrant, Web Design Inquiry, Software Development South Africa,Digital Solutions, Tech Support" />
      {/* ------------------------------ */}
      <div className="contact-overlay">
        <div className="contact-content">
          
          {/* Left Side: Info */}
          <div className="contact-info-side">
            <h1 className="contact-title">Ready to Transform Your Life?</h1>
            <br></br>
            <p className="contact-subtitle">
              Join us on our mission to create a better, tech-driven world</p>
            <br></br>
            <br></br>
            <div className="contact-details-list">
              <div className="detail-item">
                <div className="icon-box"><a href="mailto:josep@actsquadrant.com">✉️</a></div>
                <a href="mailto:josephmotshana137@gmail.com" className="contact-link">joseph@actsquadrant.com</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="tel:+27715903655">📞</a></div>
                <a href="tel:+27842207128" className="contact-link">+27 71 590 3655</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="https://x.com/Acts_quadrant" target="_blank" rel="noopener noreferrer">𝕏</a></div>
                <a href="https://x.com/Acts_quadrant" target="_blank" rel="noopener noreferrer" className="contact-link">X (Twitter)</a>
              </div>
              <br></br>
              <div className="detail-item">
                <div className="icon-box"><a href="https://www.linkedin.com/company/acts-quadrant/" target="_blank" rel="noopener noreferrer">in</a></div>
                <a href="https://www.linkedin.com/company/acts-quadrant/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
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
