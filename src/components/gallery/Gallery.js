import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [isMobile, setIsMobile] = useState(false);

  // Check for screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view for screens <= 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <Container className="gallery-container">
      <h2 className="gallery-title text-center mb-4">Gallery</h2>

      {isMobile ? (
        // Mobile Bootstrap Carousel View
        <Carousel indicators={true} controls={true} interval={3000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        // Desktop Grid View using Bootstrap Grid
        <Row className="g-4">
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div className="grid-item h-100">
                <img 
                  src={image} 
                  alt={`Gallery item ${index + 1}`}
                  loading="lazy"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Gallery;
