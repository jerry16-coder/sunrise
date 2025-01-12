import React from "react";
import "./MissionSection.css";

const MissionSection = () => {
  return (
    <section className="mission-section">
      {/* Left Side */}
      <div className="mission-left">
        <h1>
          OUR <br /> MISSION
        </h1>
      </div>

      {/* Right Side */}
      <div className="mission-right">
        <h2>Our Strive</h2>
        <p>
          At Sunrise International School, we are dedicated to providing a
          nurturing environment where students can excel academically and
          personally. Our mission is to lay a strong foundation, inspiring
          creativity, curiosity, and a love for lifelong learning.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
