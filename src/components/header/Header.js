import React from 'react';
import './Header.css'; // Create this CSS file for styling
import logo from '../../images/school-logo.png'; // Replace this with the actual logo file path

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="School Logo" className="logo" />
    </header>
  );
};

export default Header;
