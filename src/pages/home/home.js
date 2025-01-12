import React from 'react';
import './home.css';

// Home page components
import Header from "../../components/header/Header";
import ImageSection from "../../components/imageSection/ImageSection";
import Mission from "../../components/mission/MissionSection";
import Gallery from "../../components/gallery/Gallery";
import Topper from "../../components/topper/Topper";
import ScrollToTop from "../../components/scroll/ScrollToTop";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <div className="App">
      <div className='header-mobile-view'>
      <Header />
      <Navbar />
      </div>
      <ImageSection />
      <Mission/>
      <Gallery/>
      <Topper/>
      <Footer/>
      <ScrollToTop/>     
    </div>
  );
}

export default Home;