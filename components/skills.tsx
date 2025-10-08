"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";

import { fadeIn } from "@/lib/variants";
import { skillsData } from "@/lib/data";

import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (inView) {
      timer = setInterval(() => {
        setProgress((prev) =>
          prev.map((value, i) =>
            value < skillsData[i].target ? value + 1 : value
          )
        );
      }, 50);
    } else {
      setProgress(skillsData.map(() => 0));
    }

    return () => clearInterval(timer);
  }, [inView]);

  const styles = {
    path: { stroke: "#111111" },
    trail: { stroke: "#eeeeee" },
    text: { fill: "#111111", fontSize: "24px" },
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className="section font-primary"
    >
      <div className="container">
        <ul className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          {skillsData.map(({ label }, i) => (
            <li
              key={label}
              className="size-37.5 lg:size-68.75 flex flex-col items-center gap-y-6"
            >
              <CircularProgressbar
                strokeWidth={1}
                value={progress[i]}
                styles={styles}
                text={`${progress[i]}%`}
              />
              <p className="uppercase font-light tracking-[1.2px] text-center">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};
