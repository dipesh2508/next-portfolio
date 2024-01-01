"use client";
import { testimonialData } from "@/constants/testimonials";
import TestimonialCard from "@/components/ui/testimonialCard";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { MotionDiv } from "@/components/ui/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
      <div className="mb-12 flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          Testimonials
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-primary text-primary md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      \{/* Create a Swiper component for a carousel of testimonials */}
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}>
      <Swiper
        className="text-secondary"
        modules={[Pagination, Autoplay]} //Enable the Pagination and Autoplay modules
        spaceBetween={40} //Set the space between slides
        slidesPerView={slidesPerView} // Set the number of slides to show at once
        loop={true} // Enable looping of slides
        autoplay={{
          delay: 3500, // Set the delay between automatic slide changes
          disableOnInteraction: false, // Don't disable autoplay when the user interacts with the slides
          pauseOnMouseEnter: true, // Pause autoplay when the mouse enters the swiper
        }}
        speed={1300} // Set the transition speed
        pagination={{ clickable: true }} // Enable clickable pagination
      >
        {/* Map over the testimonialData and render a SwiperSlide and TestimonialCard for each item */}
        {testimonialData.map((testimonial, key) => (
          <SwiperSlide key={key}>
            <TestimonialCard
              // Pass the avatar, name, and review to the TestimonialCard
              avatar={testimonial.avatar}
              name={testimonial.name}
              review={testimonial.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </MotionDiv>
    </section>
  );
};

export default Testimonials;
