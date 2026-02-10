import React from "react";
import logo1 from "../assets/client1.png";
import logo2 from "../assets/client2.png";
import aboutBg from "../assets/about.jpg"; // Import the background image

const About = () => {
  const logos = [
    { src: logo1, alt: "Client 1" },
    { src: logo2, alt: "Client 2" },
  ];

  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(11, 22, 34, 0.85), rgba(11, 22, 34, 0.85)), url(${aboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="about-page" style={backgroundStyle}>
      {/* --- INVISIBLE SEO SECTION --- */}
      <title>About ACTS Quadrant | Tech Solutions & Digital Transformation</title>
      <meta name="description" content="Discover ACTS Quadrant, a Fourways South Africa-based technology company building modern, accessible, and scalable digital solutions for SMEs,MNCs and startups." />
      <meta name="keywords" content="About ACTS Quadrant, Digital Transformation South Africa, Modern Tech Solutions, Accessible Software Development Consultants" />
      {/* ------------------------------ */}
      {/* ABOUT INTRO */}
      <div className="about-intro">
        <br /><br />
        <h1>WHO ARE WE?</h1>
        <br />
        <p className="about-description">
          ACTS Quadrant is a technology-driven company focused on building modern, accessible and scalable 
          digital solutions for organisations and individuals.
          We partner with brands to create digital experiences that improve visibility, engagement 
          and long-term growth while helping businesses become accessible through modern digital solutions.
        </p>
        <br /><br />
      </div>
      
      {/* VALUES / WHAT WE DO */}
      <div className="about-values">
        <div className="value-card">
          <h3>Modern Technology</h3>
          <p>We build future-ready websites and digital platforms using modern tools and best practices.</p>
        </div>

        <div className="value-card">
          <h3>Accessibility First</h3>
          <p>Our solutions are designed to be usable, inclusive and accessible across all devices and users.</p>
        </div>

        <div className="value-card">
          <h3>Business Growth</h3>
          <p>We focus on solutions that help businesses grow, scale and stand out in a competitive digital world.</p>
        </div>
      </div>

      {/* CLIENTS SECTION */}
      <div className="client-section">
        <small className="welcome-text">SOME OF</small>
        <h1 className="section-title">Our Clients</h1>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-card">
              <img src={logo.src} alt={logo.alt} className="client-logo" />
            </div>
          ))}
        </div>

        <p className="clients-note">
          <br /><br />
          Trusted by startups, growing businesses and digital brands.
        </p>
      </div>
    </section>
  );
};

export default About;