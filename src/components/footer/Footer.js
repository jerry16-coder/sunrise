import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section: Follow Us */}
      <div className="footer-section">
        <h4 className="footer-title">Follow Us</h4>
        <div className="social-media-links">
          {[
            { url: "https://www.youtube.com", icon: "youtube-icon.png", name: "YouTube" },
            { url: "https://www.instagram.com", icon: "insta-icon.png", name: "Instagram" },
            { url: "https://www.facebook.com", icon: "facebook-icon.png", name: "Facebook" },
            { url: "https://www.linkedin.com", icon: "linkedin-icon.png", name: "LinkedIn" }
          ].map(social => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
            >
              <img src={social.icon} alt={social.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>

      {/* Middle Section: Navigation */}
      <div className="footer-section">
        <h4 className="footer-title">Navigation</h4>
        <nav className="footer-links">
          {[
            { href: "#about", text: "About Us" },
            { href: "#students", text: "Student Corner" },
            { href: "#admissions", text: "Admissions" },
            { href: "#fees", text: "Fee & Payment" },
            { href: "#contact", text: "Contact Us" }
          ].map(link => (
            <a key={link.href} href={link.href}>{link.text}</a>
          ))}
        </nav>
      </div>

      {/* Right Section: Reach Us */}
      <div className="footer-section">
        <h4 className="footer-title">Reach Us</h4>
        <address className="contact-info">
          <p>Location: Sunrise School, Main Street, City</p>
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          <p>Email: <a href="mailto:info@sunrise.edu">info@sunrise.edu</a></p>
        </address>
      </div>

      {/* Copyright Text */}
      <div className="footer-bottom">
        <small>&copy; {new Date().getFullYear()} Sunrise International School. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
