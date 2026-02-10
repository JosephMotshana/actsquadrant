import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero-video.mp4"; // put your video here

const Home = () => {
  return (
    <section className="hero">
      {/* --- INVISIBLE SEO SECTION --- */}
      <title>Software Development Company in Fourways South Africa  | ACTS Quadrant</title>
      <meta name="description" content="ACTS Quadrant builds futuristic, scalable, and secure digital solutions for SMEs and startups in South Africa." />
      <meta name="keywords" content="Web Design, Software Development, ACTS Quadrant, Digital Solutions" />
      {/* ------------------------------ */}

      {/* Background video */}
      <video autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <small className="welcome-text">Welcome To</small>
          <h1> 
            ACTS quadrant<br />
            <br />
            ‟We Build <br />
            For The Future‟
          </h1>

          <p>
            We build Futuristic, scalable,
            secure and future-ready digital solutions.
          </p>

          <Link to="/services" className="hero-btn">
            EXPLORE SERVICES ▶
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
