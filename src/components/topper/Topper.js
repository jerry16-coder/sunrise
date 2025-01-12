import React from "react";
import "./Topper.css"; // CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";

import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import star from "../../images/star.svg";
import medal from "../../images/medal.png"

const TopperSection = () => {
  const schoolTopper = {
    name: "John Doe",
    image: image6,
    designation: "School Topper",
  };

  const classToppers = [
    { id: 1, name: "John Doe", class: "10th Grade", image: image6 },
    { id: 2, name: "Jane Smith", class: "9th Grade", image: image7 },
    { id: 3, name: "Alex Johnson", class: "8th Grade", image: image8 },
    { id: 4, name: "Emily Davis", class: "7th Grade", image: image9 },
    { id: 5, name: "Michael Brown", class: "6th Grade", image: image10 },
    { id: 6, name: "Chris Martin", class: "5th Grade", image: image7 },
  ];

  return (
    <div className="topper-section container mt-5">
      {/* <h2 className="topper-heading text-center mb-4">Topper's Details</h2>

      <div className="school-topper text-center mb-5">
        <img
          src={schoolTopper.image}
          alt={schoolTopper.name}
          className="circular-image school-image mb-3"
        />
        <h3 className="topper-name">{schoolTopper.name}</h3>
        <p className="topper-designation">{schoolTopper.designation}</p>
      </div> */}

      {/* Horizontal Scrolling Class Toppers */}
      <h1 className="topper-heading text-center mb-4"><img src={medal} width={50} height={50} className="mx-2"></img>Topper's</h1>
      <div className="class-toppers-container">
        {classToppers.map((topper) => (
          <div className="position-relative">
          <div className="card horizontal-card" key={topper.id}>
            <div className="d-flex justify-content-center my-3">
            <img
              className="card-img-top"
              src={topper.image}
              alt={`${topper.name}`}
            />
            </div>
            <div className="card-body">
              <h5 className="card-title">{topper.name}</h5>
              <p className="card-text">Class: {topper.class}</p>
              
            </div>
            </div>
            {topper.id === 1 &&



            <div className="school-topper-star">
              <img src={star}></img></div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopperSection;
   