import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";

import "./App.css";

const App = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/29700687/pexels-photo-29700687/free-photo-of-vibrant-abstract-floral-light-painting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="" />
        {/* <div className="navbar-logo">MyApp</div> */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Expertise</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              Services ▼
            </button>
            <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <li>
                <a href="#web-development">App Development</a>
              </li>
              <li>
                <a href="#design">Web Development</a>
              </li>
              <li>
                <a href="#seo">UI & UX Designing</a>
              </li>
              <li>
                <a href="#seo">Digital Marketing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">Portfolio</a>
          </li>
          <li>
            <a href="#">Resourses</a>
          </li>
          <li>
            <button className="cta-button">Get in Touch</button>
          </li>
        </ul>
      </nav>
      <div className="carousel">
        <div className="carousel-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
