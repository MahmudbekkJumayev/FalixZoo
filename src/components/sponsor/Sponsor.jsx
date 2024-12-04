import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/starbucks-130x100.png";
import img2 from "../../assets/images/sony-130x100.png";
import img3 from "../../assets/images/starbucks-130x100.png";
import img4 from "../../assets/images/starbucks-130x100.png";
import img5 from "../../assets/images/starbucks-130x100.png";
import img6 from "../../assets/images/starbucks-130x100.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function Sponsor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) return 5; 
    if (window.innerWidth >= 768) return 3; 
    return 1; 
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
          width: `${images.length * (100 / slidesToShow)}%`,
        }}
      >
        {[...images, ...images].map(
          (
            image,
            index 
          ) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex justify-center"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-40 h-auto"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
