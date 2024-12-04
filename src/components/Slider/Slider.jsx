import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/images/iPhone6-1140x380.jpg";
import img2 from "../../assets/images/MacBookAir-1140x380.jpg";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="rounded-lg h-[50vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative group">
            <img
              src={img1}
              alt="iPhone"
              className="w-full transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex justify-center items-center">
              <div className="text-white text-2xl space-x-4">
                <i className="fas fa-heart cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out"></i>
                <i className="fas fa-cart-plus cursor-pointer hover:text-green-500 transition-all duration-200 ease-in-out"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img
              src={img2}
              alt="MacBook Air"
              className="w-full h-auto transition-all duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex justify-center items-center">
              <div className="text-white text-2xl space-x-4">
                <i className="fas fa-heart cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out"></i>
                <i className="fas fa-cart-plus cursor-pointer hover:text-green-500 transition-all duration-200 ease-in-out"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
