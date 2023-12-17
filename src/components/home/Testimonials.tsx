"use client"
import { testimonialData } from "@/constants/testimonials";
import TestimonialCard from "@/components/ui/testimonialCard";
import { useState, useEffect } from "react";
import {Pagination, Autoplay} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Testimonials = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        setSlidesPerView(window.innerWidth <= 640 ? 1 : 3); // Update based on width
      };
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial call to set slidesPerView
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <section id="testimonials" className="p-8 md:p-24">
      <div className="flex flex-col items-center mb-12">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          Testimonials
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-primary text-primary md:mt-2 md:h-2.5 md:w-52"></div>
      </div>

      <Swiper
        className="text-secondary"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1300}
        pagination={{ clickable: true }}
      >
        {testimonialData.map((testimonial, key) => (
          <SwiperSlide key={key}>
            <TestimonialCard
              avatar={testimonial.avatar}
              name={testimonial.name}
              review={testimonial.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
