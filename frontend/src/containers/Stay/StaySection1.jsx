import React from "react";
import { donut, donutCrescent, staysection1 } from "../../assets/img";
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
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const StaySection1 = () => {
  return (
    <>
        <section className="relative z-0 container h-full md:h-[450px] flex items-center justify-center px-2 my-2">
        <div className="relative z-0 max-w-[900px] w-full h-full bg-white flex flex-col md:flex-row items-center md:justify-between">
          <motion.div
            className="order-2 md:order-1 relative w-full sm:w-1/2 h-fit p-4 md:p-0"
            variants={variants}
            initial="hidden"
            whileInView="show"
          >
            <motion.h4 className="" variants={item}>
              Stays at The Seventeen Degrees Hotel
            </motion.h4>
            <motion.h1
              className="uppercase font-saveurRegular text-primary-pink"
              variants={item}
            >
              An Invitation to feel good
            </motion.h1>
          </motion.div>

          <div className="order-1 md:order-2 relative w-full sm:w-1/2 h-fit px-2">
            <div className="size-[3rem,32vw,4rem] bg-black rounded-full">
              <img
               src={staysection1}
                alt=""
                className="relative w-full h-auto z-[12]"
                loading="lazy"
                width={200}
                height={200}
                srcSet=""
              />
            </div>
            <div className="absolute z-0 w-[35%] h-auto -top-2 right-0">
              <img src={donut} alt="" className="w-full h-auto" />
              <motion.img
                src={donutCrescent}
                alt=""
                className="absolute z-1 w-[22%] right-[31%] top-[31%]"
                whileInView={{ rotate: [-60, 0], opacity: [0, 1] }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                width={100}
                height={100}
                loading="lazy"
                srcSet=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaySection1;
