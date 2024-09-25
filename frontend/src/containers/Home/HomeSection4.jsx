import React from "react";
import { motion } from "framer-motion";
import {
  cassette,
  madeImg,
} from "../../assets/img";
import { Doorknob } from "../../components";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
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
      duration: 0.3,
      ease: "easeIn",
    },
  },
};
const HomeSection4 = () => {
  return (
    <section className="conatiner h-full bg-secondary-pink md:h-[600px] flex items-center justify-center py-10">
      <div className="max-w-[1000px] w-full h-full flex flex-col md:flex-row items-center md:justify-between px-4 gap-y-10 mx-auto">
        <motion.div
          className="order-2 md:order-1 relative w-full sm:w-1/2 h-fit px-5 space-y-5 mx-auto"
          variants={variants}
          initial="hidden"
          whileInView="show"
        >
          <p className="leading-10 pr-5" variants={item}>
            A pillar of consistency and quality service, 17 Degrees has
            been setting the bar for competition since 2004 in Dhanbad.
          </p>
          <h3
            className="uppercase tracking-tight font-saveurRegular"
            variants={item}
          >
            At 17, everything is made-to-feel.
          </h3>
          <Doorknob />
        </motion.div>

        <div className="order-1 md:order-2 relative w-full sm:w-1/2 h-fit px-2">
          <img
            src={madeImg}
            alt=""
            className="relative w-full h-auto z-[1] py-4 md:p-5"
          />
          <div className="absolute z-[12] size-[180px] bottom-0 right-0 flex items-center justify-center">
            <motion.img
              src={cassette}
              alt=""
              className="absolute w-full p-2 z-[12]"
            />
            <div className="relative block size-full bg-white rounded-full z-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
