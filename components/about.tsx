"use client";

import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

import { fadeIn } from "@/lib/variants";

export const About = () => {
  return (
    <section id="about" className="lg:py-16 xl:pb-40">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-x-17.5">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col lg:flex-row"
          >
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
              01
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48"
          >
            <h2 className="h2">My Story:</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-132.5 text-grey">
                <p className="mb-6">
                  Every tattoo tells a story — a memory, a feeling, or a dream
                  brought to life through ink. At InkHaven Studio, we blend
                  creativity and precision to design custom tattoos that reflect
                  your personality and vision with authenticity and care.
                </p>
                <p className="mb-9">
                  From fine-line minimalism to bold traditional pieces, our
                  artists bring years of experience and passion to every design.
                  We value cleanliness, comfort, and individuality — ensuring
                  each client leaves not only with great art but also an
                  unforgettable experience.
                </p>
                <button type="button" className="btn btn-lg btn-link">
                  <span className="text-xl">Know more</span>
                  <IoMdArrowForward size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
