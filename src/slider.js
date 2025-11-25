import React, { useState, useEffect, useRef } from "react";
import banner from "./images/Scene1.png"

const bannerimages = [
  { id:1, src:banner},
  { id:2, src:banner},
  { id:3, src:banner},
  { id:4, src:banner}
];

function Slider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Move to next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % bannerimages.length);
    resetTimer();
  };

  // Move to previous slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? bannerimages.length - 1 : prev - 1
    );
    resetTimer();
  };

  // Clear & restart the auto-slide timer
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startTimer();
  };

  // Start the auto slide timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerimages.length);
    }, 3000); // auto-scroll every 3 seconds
  };

  // Start timer on mount, clean on unmount
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "350px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "12px"
      }}
    >
      {/* Slide image */}
      <img
        src={bannerimages[index].src}
        alt="slider"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.5s"
        }}
      />

      {/* Left button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fontSize: "20px",
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none"
        }}
      >
        ❮
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "20px",
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none"
        }}
      >
        ❯
      </button>
    </div>
  );
}

export default Slider;
