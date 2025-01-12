import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import schoolLogo from "../../images/school-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset menu state on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    {
      id: 'about',
      label: 'About Us',
      children: [
        { label: 'Overview', path: '/about/overview' },
        { label: 'Our Mission & Vision', path: '/about/mission' },
        { label: 'Principal Message', path: '/about/principal-message' },
        { label: 'Infrastructure', path: '/about/infrastructure' },
        { label: 'Faculty', path: '/about/faculty' }
      ]
    },
    {
      id: 'students',
      label: 'Student',
      children: [
        { label: 'Result', path: '/students/result' },
        { label: 'Fees Details', path: '/students/fees-details' },
        { label: 'Syllabus', path: '/students/syllabus' },
        { label: 'Time-table', path: '/students/time-table' },
        { label: 'Disciplinary Action', path: '/students/disciplinary' }
      ]
    },
    {
      id: 'admission',
      label: 'Admission',
      children: [
        { label: 'Admission Process', path: '/admissions/process' },
        { label: 'School Uniform', path: '/admissions/uniform' }
      ]
    },
    {
      id: 'fees',
      label: 'Fees & Payment',
      children: [
        { label: 'Fee Structure', path: '/fees/fee-structure' },
        { label: 'Online Payment', path: '/fees/online-payment' }
      ]
    },
    {
      id: 'donation',
      label: 'Donation',
      children: [
        { label: 'Financial Donation', path: '/fees/donations/financial' },
        { label: 'Time Donation', path: '/fees/donations/time' },
        { label: 'Other Donation', path: '/fees/donations/other' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  const renderDropdownMenu = (items) => (
    <ul className="dropdown-menu">
      {items.map(item => (
        <li key={item.path} className={item.children ? 'dropdown' : ''}>
          {item.children ? (
            <>
              <span className="dropdown-toggle1">
                {item.label} <span className="dropdown-arrow"></span>
              </span>
              {renderDropdownMenu(item.children)}
            </>
          ) : (
            <Link to={item.path}>{item.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {scrolled && (
        <Link to="/" className="logo">
          <img src={schoolLogo} alt="School Logo" />
        </Link>
      )}
      <a
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems.map(item => (
          <li key={item.path || item.id} className={item.children ? 'dropdown' : ''}>
            {item.children ? (
              <>
                <span className="dropdown-toggle1">
                  {item.label} <span className="dropdown-arrow"></span>
                </span>
                {renderDropdownMenu(item.children)}
              </>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
