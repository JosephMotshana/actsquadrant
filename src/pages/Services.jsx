import React from "react";
import { Link } from "react-router-dom";
import servicesBg from "../assets/services.jpeg";

const Services = () => {
  return (
    <section 
      className="services-section" 
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      <div className="content-overlay">
        <div className="services-container">
          
          <div className="services-header">
            <h2>Our Services</h2>
            <br></br>
          </div>

          <div className="services-grid">
            {/* Boxes will now expand to fit their text */}
            <div className="square-box">
              <h3>Web Hosting & Domain Registration</h3>
              <br></br>
              <p>Secure, high-performance hosting solutions with guaranteed uptime and scalability for your business growth.
                Fast and reliable domain registration with full DNS management and dedicated technical support
              </p>
            </div>

            <div className="square-box">
              <h3>Web Development</h3>
              <br></br>
              <br>    </br>
              <p>Custom-built websites and web applications using modern, future-ready technologies tailored to your needs.</p>
            </div>

            <div className="square-box">
              <h3>APP Development</h3>
              <br>
              </br>
              <p>We build custom mobile applications for iOS and Android platforms, designed to deliver seamless user experiences and robust functionality.</p>
            </div>

            <div className="square-box">
              <h3>Source Code Licensing</h3>
              <br></br>
              <p>Secure and compliant licensing solutions tailored to your specific software and IP requirements.</p>
            </div>

            <div className="square-box">
              <h3>Indexing</h3>
              <br></br>
              <p>Search engine indexing and optimization to improve visibility and online discoverability across platforms.</p>
            </div>

            <div className="square-box">
              <h3>Web Maintenance</h3>
              <br></br>
              <p>Ongoing updates, security monitoring, backups and performance optimization to keep your site running smoothly.</p>
            </div>
          </div>

          <div className="cta-wrapper">
            <br></br>
            <Link to="/contact" className="hero-btn">
            LET'S WORK ▶
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;