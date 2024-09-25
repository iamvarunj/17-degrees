import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  reviewsImg1,
  reviewsImg1Border,
  reviewsImg2,
  reviewsImg3,
  reviewsProfile1,
} from "../../assets/img";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// const line1 = "We",
//   line2 = "Thrive on",
//   line3 = "What our",
//   line4 = "Guests",
//   line5 = "Feel";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

const text = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

const HomeSection6 = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: [" start start", "end end"],
  });

  let down = useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]);
  let up = useTransform(scrollYProgress, [0, 1], ["100%", "-50%"]);

  return (
    <section className="container w-full h-full bg-white flex items-center justify-center pt-20 pb-10">
      <div className="relative max-w-[1100px] w-full flex items-center justify-center flex-wrap gap-y-10">
        <motion.div
          className="space-y-3 px-4"
          variants={variants}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1 className="pl-4" variants={text}>
            We
          </motion.h1>
          <motion.h1 className="pl-16 " variants={text}>
            Thrive on
          </motion.h1>
          <motion.h1 className="pl-9" variants={text}>
            What our
          </motion.h1>
          <motion.h1 className="pl-40 text-primary-pink" variants={text}>
            Guests
          </motion.h1>
          <motion.h1 className="pl-64 " variants={text}>
            Feel
          </motion.h1>
        </motion.div>

        <div className="relative md:w-1/2 h-auto flex flex-col md:flex-row justify-between">
          {/* reviews */}
          <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-2 gap-4 ">
            <div className="relative mx-5">
              <ImQuotesLeft className="absolute left-0 top-0" />
              <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ImQuotesRight className="absolute right-0 bottom-0" />
            </div>
            <div className="flex gap-x-4">
              <img
                src={reviewsProfile1}
                alt=""
                className="size-10 object-contain"
              />
              <h4 className="">Vaibhav Sharma</h4>
            </div>
          </div>
          <div className="hidden md:block relative w-1/3 h-auto">
            <motion.img
              style={{ y: up }}
              src={reviewsImg1}
              alt=""
              className="relative z-[2] w-full h-auto object-cover"
            />
            <motion.img
              style={{ y: down }}
              src={reviewsImg1Border}
              alt=""
              className="absolute z-[1] w-full h-auto bottom-0 -right-5 object-cover"
            />
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-around">
          <div className="hidden relative w-1/3 h-auto md:flex items-center justify-center">
            <motion.img
              style={{ y: up }}
              src={reviewsImg2}
              alt=""
              className="absolute z-[2] w-[50%] h-auto object-cover"
            />
            <motion.img
              style={{ y: down }}
              src={reviewsImg1Border}
              alt=""
              className="absolute z-[1] w-[50%] h-auto bottom-0 right-16 object-cover"
            />
          </div>
          {/* reviews */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-2 gap-4 ">
            <div className="relative mx-5">
              <ImQuotesLeft className="absolute left-0 top-0" />
              <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ImQuotesRight className="absolute right-0 bottom-0" />
            </div>
            <div className="flex gap-x-4">
              <img
                src={reviewsProfile1}
                alt=""
                className="size-10 object-contain"
              />
              <h4 className="">Vaibhav Sharma</h4>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex justify-around">
          {/* reviews */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-2 gap-4 ">
            <div className="relative mx-5">
              <ImQuotesLeft className="absolute left-0 top-0" />
              <p className="m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ImQuotesRight className="absolute right-0 bottom-0" />
            </div>
            <div className="flex gap-x-4">
              <img
                src={reviewsProfile1}
                alt=""
                className="size-10 object-contain"
              />
              <h4 className="">Vaibhav Sharma</h4>
            </div>
          </div>
          <div className="hidden relative w-1/3 h-auto md:flex items-center justify-center">
            <motion.img
              style={{ y: up }}
              src={reviewsImg3}
              alt=""
              className="absolute z-[2] w-[50%] h-auto object-cover"
            />
            <motion.img
              style={{ y: down }}
              src={reviewsImg1Border}
              alt=""
              className="absolute z-[1] w-[50%] h-auto bottom-0 right-16 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
