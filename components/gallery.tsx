"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import { IoMdArrowForward } from "react-icons/io";

import { fadeIn } from "@/lib/variants";
import { galleryData } from "@/lib/data";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section id="gallery" className="relative mt-10 lg:mt-0 section bg-gallery">
      <div className="container">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 lg:mb-20"
        >
          Check my gallery:
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <RowsPhotoAlbum
          photos={galleryData}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={galleryData}
          index={index}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button type="button" className="btn btn-lg btn-dark">
          View all
          <IoMdArrowForward size={20} />
        </button>
      </motion.div>
    </section>
  );
};
