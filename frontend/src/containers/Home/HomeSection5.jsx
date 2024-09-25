import React from "react";
import { motion } from "framer-motion";
import {
  camera,
  flashLeft,
  flashRight,
  followBgImg1,
  followImg1,
  followImg2,
  followImg3,
  followImg4,
  followImg5,
} from "../../assets/img";

const HomeSection5 = () => {
  return (
    <section className="relative container h-full py-20 md:py-0 bg-primary-blue/50 md:h-[600px] flex items-center justify-center">
      <div className="size-full flex flex-col justify-around ">
        <img
          src={followBgImg1}
          alt=""
          className="absolute hidden md:block w-[15%] top-10 -left-20 h-auto object-cover"
        />
        <div className="absolute hidden md:block size-[350px] bottom-0 right-32">
          <motion.img
            src={flashLeft}
            alt=""
            className="absolute w-[15%] h-auto top-10 left-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
          <img src={camera} alt="" className="w-full h-auto object-contain" />
          <motion.img
            src={flashRight}
            alt=""
            className="absolute w-[5%] h-auto top-10 right-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2, repeat: Infinity }}
          />
        </div>

        <div className="absolute z-[12] size-full flex items-center justify-center">
          <a href="https://www.instagram.com/17degreeshotel" target="_blank">
            <h1 className=" text-primary-pink">Follow</h1>
            <h2 className="uppercase font-saveurLight text-primary-pink">
              @17 Degrees
            </h2>
          </a>
        </div>
        <div className="relative w-full overflow-hidden flex z-1">
          <motion.div
            className="flex"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg1}
              alt=""
              className="flex flex-shrink-0 w-[160px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg2}
              alt=""
              className="flex flex-shrink-0 w-[125px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg1}
              alt=""
              className="flex flex-shrink-0 w-[160px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg2}
              alt=""
              className="flex flex-shrink-0 w-[125px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
          </motion.div>
        </div>
        <div className="relative w-full overflow-hidden flex z-1">
          <motion.div
            className="flex"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg3}
              alt=""
              className="flex flex-shrink-0 w-[115px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg4}
              alt=""
              className="flex flex-shrink-0 w-[180px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg5}
              alt=""
              className="flex flex-shrink-0 w-[150px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg3}
              alt=""
              className="flex flex-shrink-0 w-[115px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg4}
              alt=""
              className="flex flex-shrink-0 w-[180px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <img
              src={followImg5}
              alt=""
              className="flex flex-shrink-0 w-[150px] h-auto object-contain"
            />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
            <div className="flex flex-shrink-0 w-[150px] h-[240px] " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;
