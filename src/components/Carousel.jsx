import React, { useState, useEffect } from "react";
import Slide1 from '../assets/images/Slide1.webp';
import Slide2 from '../assets/images/Slide2.webp';
import Slide3 from '../assets/images/Slide3.webp';

export default function Carousel() {
  const slides = [Slide1, Slide2, Slide3]; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  // Change slide every 3 seconds (you can adjust the timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Carousel items */}
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" onClick={goToPrevSlide}>
        &#10094; {/* Left arrow symbol */}
      </button>
      <button className="carousel-control-next" onClick={goToNextSlide}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
}
