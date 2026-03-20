import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding & Mission */}
        <div className="footer-brand">
          <h2 className="footer-logo">Acts<span className="highlight">Quadrant</span></h2>
          <p>
            Where ideas are transformed into future-ready digital solutions.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/acts-quadrant/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://web.facebook.com/people/ACTS-quadrant/61587171284968/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-section">
          <h3>Network</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>Our Mission</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Join Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={16} className="highlight" />
              <a href="mailto:joseph@actsquadrant.com">joseph@actsquadrant.com</a>
            </li>
            <li>
              <MapPin size={16} className="highlight" />
              <a href="https://maps.google.com/?q=Spaces+Broadacres%2CFourways%2C2021" target="_blank" rel="noreferrer">
                Spaces Broadacres,Fourways,2021
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Acts Quadrant. All rights reserved.</p>
          <Link to="https://actsquadrant.com/" className="hero-btn">Powered By Acts Quadrant</Link>
          {/* <div className="footer-legal">
            <Link to="https://docs.google.com/document/d/1liXejC_K33p6M0Gy3UlV2wakqzSRsfia8fILMQtjuxw/edit?usp=sharing">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="https://drive.google.com/file/d/1AptEhs1d-d5pBJbhaTo_gpMYRpadXehg/view?usp=drive_link">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;