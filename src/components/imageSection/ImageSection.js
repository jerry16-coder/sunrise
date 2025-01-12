import React from "react";
import "./ImageSection.css";
import BoyGirlImage from "../../images/boygirl1.png";

const BoyGirlSection = () => {
  return (
    <div className="boy-girl-section">
      <img src={BoyGirlImage} alt="Boy and Girl" className="boy-girl-image" />
    </div>
  );
};

export default BoyGirlSection;
