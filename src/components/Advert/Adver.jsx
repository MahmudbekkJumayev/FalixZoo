import React from "react";
import { useState } from "react";
import cardImg2 from "../../assets/images/banner1.jpg";
import buttonIcon from "../../assets/icons/free_icon_1 (1).svg";

const Adver = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/src/assets/images/Animalfood3.webp",
    "/src/assets/images/catcms-1.jpg",
    "/src/assets/images/catcms-1.jpg",
   
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* slider */}
        <div className="relative w-full">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-200 ease-linear ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide}
                  objectFit="cover"
                  alt={`Slide ${index + 1}`}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
            ))}
          </div>

          {/* Slider controls (optional) */}
          {/* Uncomment if needed */}
          {/*
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        Next
      </button>
      */}
        </div>
        {/* slider */}
      </div>
    </div>
  );
};

export default Adver;
