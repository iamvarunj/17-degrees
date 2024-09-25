import React from "react";
import { motion } from "framer-motion";
import "./Banner.scss";
import { bannerImg, bannerOverlay } from "../../assets/img";

const line1 = "Feel-good hospitality";
const line2 = "takes warmth, authenticity";
const line3 = "and genuine care.";

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
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Banner = () => {
  return (
    <section className="banner-section mt-20 ">
      <div className="banner-img-container">
        <motion.img
          src={bannerOverlay}
          alt=""
          className="banner-img-overlay"
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        />
        <img src={bannerImg} alt="" className="banner-img" />
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        className="absolute pt-20 flex flex-col items-center gap-y-5"
      >
        <motion.h2
          variants={item}
          className="text-5xl text-white font-ralewayLight tracking-wider"
        >
          {line1}
        </motion.h2>
        <motion.h2
          variants={item}
          className="text-5xl text-white font-ralewayLight tracking-wider"
        >
          {line2}
        </motion.h2>
        <motion.h2
          variants={item}
          className="text-5xl text-white font-ralewayLight tracking-wider"
        >
          {line3}
        </motion.h2>
        <motion.div variants={item} className="pt-2">
          <button className="w-[200px] h-[55px] rounded-full text-white bg-primary-pink font-ralewayMedium text-xl">
            Meet Team 17
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
