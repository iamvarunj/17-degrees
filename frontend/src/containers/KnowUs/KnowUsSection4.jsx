import React from "react";
import {
  spacesQuote,
  spacesSection4Img1,
  spacesSection4Img2,
} from "../../assets/img";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const KnowUsSection4 = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center pb-10">
      <div className=" max-w-screen-2xl w-full h-full">
        <div className="relative w-full md:h-[550px] min-[1400px]:h-[650px] flex items-center justify-center">
          <div className="w-full h-full">
            <div className="absolute size-full bg-black/30 z-[15]" />
            <img
              src={spacesSection4Img1}
              alt=""
              className="absolute size-full z-[12] object-cover object-center bg-blend-overlay"
            />
          </div>
          <img
            src={spacesSection4Img2}
            alt=""
            className="absolute z-[22] w-[25%] h-auto object-contain"
          />

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="absolute z-[33] flex flex-col items-center justify-center gap-y-2"
          >
            <motion.h1 variants={item} className="text-[clamp(2.5rem,10vw,4.5rem)] text-white text-center">
              Make someone's <br /> day everyday
            </motion.h1>

            <motion.h3 variants={item} className="text-white ">
              - OUR MISSION -
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection4;
