"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeIn, heroContainerVariant } from "@/lib/variants";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-30 lg:mt-37.5 min-h-[40vh] lg:h-237 bg-hero bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <motion.div
        variants={heroContainerVariant}
        initial="hidden"
        whileInView={"show"}
        className="container min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end"
      >
        <div className="lg:max-w-160 text-white text-center lg:text-left">
          <motion.h1 variants={fadeIn("down")} className="h1">
            I’m Void Sir.
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            Tattoos have their own unique power and magic. They not only
            beautify the body but also the psyche.
          </motion.p>
          <motion.button
            variants={fadeIn("down")}
            type="button"
            className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0"
          >
            read more
            <ArrowRight size={20} />
          </motion.button>
        </div>
        <div className="hidden xl:flex absolute bottom-48 right-2 left-0 before:absolute before:inset-0 before:bg-outlineText before:bg-no-repeat before:bg-center before:bg-contain before:h-50" />
      </motion.div>
    </section>
  );
};
