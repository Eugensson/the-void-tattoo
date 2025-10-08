"use client";

import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeIn } from "@/lib/variants";
import { testimonialData } from "@/lib/data";

import "swiper/css";

export const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-10 lg:py-40 font-primary"
      id="articles"
    >
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          className="swiper-container swiper-container-horizontal"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {testimonialData.map(
            ({ id, message, name, occupation, icon: Icon }) => (
              <SwiperSlide key={id} className="cursor-pointer">
                <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-x-[38px] max-w-[1200px]">
                  <Icon size={150} className="mx-auto mb-5 text-neutral-200" />
                  <div className="flex-1 lg:mt-[54px]">
                    <p className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">
                      {message}
                    </p>
                    <div className="flex items-center text-xl lg:text-2xl">
                      <p className="font-semibold">{name}</p>
                      <span className="mx-4">|</span>
                      <p className="font-light">{occupation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </motion.section>
  );
};
