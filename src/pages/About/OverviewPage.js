// About.js
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scroll from "../../components/scroll/ScrollToTop";
import "./OverviewPage.css";
import aboutImage from "../../images/red-bannner.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="overview-page">
      <div className="header-mobile-view">        
        <Header />
        <Navbar />
      </div>
      
      <div className="about-image-container">
        <div className="overlay-text">
          <h1>Overview</h1>
        </div>
        <img 
          src={aboutImage}
          alt="About Us"
          className="about-banner-image"
          loading="lazy"
        />
      </div>

      <div className="content-section">
        <div className="content-box" data-aos="fade-up">
          <div className="content-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <div className="content-text">
            <h2 className="title-animated"> Why Choose Us?</h2>
            <div className="divider"></div>
            <p className="content-description">
            At Sunrise International School, we combine modern teaching techniques 
            with a nurturing environment to create
             a foundation for lifelong learning. Our personalized approach 
             ensures that every student thrives academically and personally, 
             laying the groundwork for future success.
            </p>
            
          </div>
        </div>

        <div className="content-box" data-aos="fade-up" data-aos-delay="200">
          <div className="content-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="content-text">
            <h2 className="title-animated">Holistic Development</h2>
            <div className="divider"></div>
            <p className="content-description">
            We believe education goes beyond books. 
            Through a perfect blend of academics, arts, sports, and 
            extracurricular activities, we nurture well-rounded individuals 
            who are equipped to face the challenges of the future with confidence
             and compassion.
            </p>
            
          </div>
        </div>

        <div className="content-box" data-aos="fade-up" data-aos-delay="400">
          <div className="content-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="content-text">
            <h2 className="title-animated">Academic Excellence</h2>
            <div className="divider"></div>
            <p className="content-description">
            At Sunrise International School, we take pride in our rigorous academic programs designed to challenge and inspire. With a team of dedicated educators and a curriculum tailored to global standards, we ensure our students excel in academics while fostering critical thinking and problem-solving skills
            </p>
            
          </div>
        </div>
      </div>

      <Footer />
      <Scroll />
    </div>
  );
};

export default About;
