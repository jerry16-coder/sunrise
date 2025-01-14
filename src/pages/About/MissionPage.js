import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scroll from "../../components/scroll/ScrollToTop";
import "./MissionPage.css";
import missionImage from "../../images/red-bannner.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MissionPage = () => {
  const [expandedMission, setExpandedMission] = useState(false);
  const [expandedVision, setExpandedVision] = useState(false);

  const missionText = `To nurture and empower young minds with a holistic approach to education, fostering intellectual curiosity, creativity, and character development. Our mission is to provide a safe, inclusive, and stimulating environment where students are inspired to achieve academic excellence, embrace lifelong learning, and grow into compassionate, responsible, and globally aware citizens who contribute meaningfully to society.`;

  const visionText = `To redefine education through innovation and technology, creating a learning experience that is engaging, interactive, and future-ready. Our vision is to equip classrooms with state-of-the-art digital boards and advanced tools, enabling students to explore complex concepts through animations, simulations, and multimedia resources. By blending traditional values with modern pedagogy, we aspire to build a generation of confident, skilled, and forward-thinking individuals prepared to thrive in a rapidly evolving world.`;

  const truncateText = (text) => {
    return text.slice(0, 150) + "...";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="mission-page">
      <div className="header-mobile-view">
        <Header />
        <Navbar />
      </div>

      <div className="mission-image-container">
        <div className="overlay-text">
          <h1>Mission & Vision</h1>
        </div>
        <img
          src={missionImage}
          alt="Our Mission"
          className="mission-banner-image"
          loading="lazy"
        />
      </div>

      <div className="mission-content-section">
        <div className="mission-box" data-aos="fade-right">
          <div className="content-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <div className="content-text">
            <h2 className="title-animated">Our Mission</h2>
            <div className="divider"></div>
            <p className="content-description">
              {expandedMission ? missionText : truncateText(missionText)}
            </p>
            <button
              className="btn btn-outline-danger learn-more-btn"
              onClick={() => setExpandedMission(!expandedMission)}
            >
              {expandedMission ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="mission-box" data-aos="fade-left">
          <div className="content-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="content-text">
            <h2 className="title-animated">Our Vision</h2>
            <div className="divider"></div>
            <p className="content-description">
              {expandedVision ? visionText : truncateText(visionText)}
            </p>
            <button
              className="btn btn-outline-danger learn-more-btn"
              onClick={() => setExpandedVision(!expandedVision)}
            >
              {expandedVision ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <Scroll />
    </div>
  );
};

export default MissionPage;
