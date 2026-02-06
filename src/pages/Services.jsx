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

          </div>

          <div className="services-grid">
            {/* Boxes will now expand to fit their text */}
            <div className="square-box">
              <h3>Web Hosting & Domain Registration</h3>
              <br></br>
              <br></br>
              <p>We offer secure, high-performance hosting solutions with guaranteed uptime and scalability for your business growth.
                Fast and reliable domain registration with full DNS management and dedicated technical support
              </p>
            </div>

            <div className="square-box">
              <h3>Web Development</h3>
              <br></br>
              <br></br>
              <p>We build custom websites and web applications using modern, future-ready technologies tailored to your needs.</p>
            </div>

            <div className="square-box">
              <h3>APP Development</h3>
              <br></br>
              <br></br>
              <p>We build custom mobile applications for iOS and Android platforms, designed to deliver seamless user experiences and robust functionality.</p>
            </div>

            <div className="square-box">
              <h3>Source Code Licensing</h3>
              <br></br>
              <br></br>
              <p>We offer secure and compliant licensing solutions tailored to your specific software and IP requirements.</p>
            </div>

            <div className="square-box">
              <h3>Indexing</h3>
              <br></br>
              <br></br>
              <p>We offer search engine indexing and optimization to improve visibility and online discoverability across platforms.</p>
            </div>

            <div className="square-box">
              <h3>Web Maintenance</h3>
              <br></br>
              <br></br>
              <p>We offer ongoing updates, security monitoring, backups and performance optimization to keep your site running smoothly.</p>
            </div>
            <div className="square-box">
              <h3>Data Analytics & Insights</h3>
              <br></br>
              <br></br>
              <p>We help businesses make better decisions by turning data into clear, actionable insights through dashboards, reports and performance analysis.</p>
            </div>
            <div className="square-box">
              <h3>Cloud Computing</h3>
              <br></br>
              <br></br>
              <p>We design, deployment and manage cloud-based systems that improve flexibility, scalability and cost efficiency.</p>
            </div>
            <div className="square-box">
              <h3>IT Infrastructure & Support</h3>
              <br></br>
              <br></br>
              <p>We set up, manage and support reliable IT infrastructure—ensuring systems run smoothly, securely and with minimal downtime.</p>
            </div>
            <div className="square-box">
              <h3>System Integration & Automation</h3>
              <br></br>
              <br></br>
              <p>We Connect systems and automate workflows to reduce manual work, improve accuracy and save time.</p>
            </div>
            <div className="square-box">
              <h3>Digital Transformation & Technology Strategy</h3>
              <br></br>
              <br></br>
              <p>We help businesses adopt the right technology plan for growth and build future-ready systems aligned with long-term goals.</p>
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