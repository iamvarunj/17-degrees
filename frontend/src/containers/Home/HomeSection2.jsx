import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  demo,
  landing2BgImg1,
  landing2BgImg2,
  landing2Img1,
  landing2Img2,
} from "../../assets/img";
import { Link } from "react-router-dom";

const upArrow = {
  hover: { y: -20 },
  viewport: { once: true },
  transition: { duration: 0.2, ease: "easeInOut" },
};
const downArrow = {
  hover: { y: 20 },
  viewport: { once: true },
  transition: { duration: 0.2, ease: "easeInOut" },
};

const HomeSection2 = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: [" start start", "end end"],
  });

  let down = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let up = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  return (
    <section className="relative z-0 container h-full flex items-center justify-center px-4">
      <img
        src={landing2BgImg1}
        alt=""
        className="absolute z-0 w-full md:w-[50%] h-auto object-cover md:px-5 top-0"
      />

      <div className="hidden max-w-[1000px] w-full h-auto md:flex flex-col md:flex-row justify-between">
        <motion.div
          className="relative w-full sm:w-1/2 h-auto px-2 flex flex-col items-center justify-center"
          style={{ y: up }}
        >
          <motion.h3
            className="pt-5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            Because making people <br /> feel great is probably the <br />
            greatest feeling there is.
          </motion.h3>
          <div className="relative w-full h-full">
            <motion.img
              src={landing2BgImg2}
              alt=""
              className="absolute -left-10 w-[70%] h-auto z-[-1]"
              style={{ originY: 1 }}
              animate={{ rotate: [-3, 0, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute z-[-1] bottom-0 size-40 rounded-full bg-primary-pink " />
            <motion.div
              className="absolute w-full h-full z-10 flex flex-col items-center justify-center gap-y-5 "
              whileHover="hover"
            >
              <motion.div
                className="w-20 h-auto flex flex-col items-center justify-center"
                variants={upArrow}
              >
                <span className="size-3 rounded-full bg-white" />
                <span className="w-[.75px] h-24 bg-white" />
              </motion.div>
              <motion.h3
                className="uppercase text-white"
                whileInView={{ scale: [0.95, 1, 0.95] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Link to="/knowus">Our Story</Link>
              </motion.h3>
              <motion.div
                className="w-20 h-auto flex flex-col items-center justify-center"
                variants={downArrow}
              >
                <span className="w-[.75px] h-24 bg-white" />
                <span className="size-3 rounded-full bg-white" />
              </motion.div>
            </motion.div>
            <img
              src={landing2Img1}
              alt=""
              className="w-full h-auto z-1 p-10 md:px-16 "
            />
          </div>
        </motion.div>

        <motion.div
          className="relative w-full sm:w-1/2 h-auto px-2"
          style={{ y: down }}
        >
          <div className="relative w-full h-auto">
            <motion.div
              className="absolute z-1 w-full h-full z-10 flex flex-col items-center justify-center gap-y-5"
              whileHover="hover"
            >
              <motion.div
                className="w-20 h-auto flex flex-col items-center justify-center"
                variants={upArrow}
              >
                <span className="size-3 rounded-full bg-white" />
                <span className="w-[.75px] h-24 bg-white" />
              </motion.div>
              <motion.h3
                className="uppercase text-white"
                whileInView={{ scale: [0.95, 1, 0.95] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Link
                  to="/knowus/#values"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Our Values
                </Link>
              </motion.h3>
              <motion.div
                className="w-20 h-auto flex flex-col items-center justify-center"
                variants={downArrow}
                // animate={{ y: [0, 20, 0] }}
                // transition={{
                //   duration: 1.5,
                //   ease: "easeInOut",
                //   repeat: Infinity,
                // }}
              >
                <span className="w-[.75px] h-24 bg-white" />
                <span className="size-3 rounded-full bg-white" />
              </motion.div>
            </motion.div>
            <img
              src={landing2Img2}
              alt=""
              className="w-full h-auto z-[12] p-10 md:px-16"
            />
          </div>
        </motion.div>
      </div>

      {/* mobile */}
      <div className="md:hidden relative z-0  w-full h-full mx-auto py-7 flex flex-col items-center justify-between gap-y-10">
        <h4 className="px-4 text-center">
          Because making people feel great is probably the greatest feeling
          there is.
        </h4>

        <div className="relative w-full h-full px-4 mx-auto grid place-items-center">
          <div className="absolute z-[-1] -bottom-10 left-0 size-40 rounded-full bg-primary-pink " />
          <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center gap-y-5">
            <div className="w-20 h-auto flex flex-col items-center justify-center">
              <span className="size-3 rounded-full bg-white" />
              <span className="w-[.75px] h-24 bg-white" />
            </div>
            <h3 className="uppercase text-white">
              <Link to="/knowus">Our Values</Link>
            </h3>
            <div className="w-20 h-auto flex flex-col items-center justify-center">
              <span className="w-[.75px] h-24 bg-white" />
              <span className="size-3 rounded-full bg-white" />
            </div>
          </div>
          <img
            src={landing2Img2}
            alt=""
            className="relative w-full h-auto object-cover object-center rounded-full"
          />
        </div>

        <div className="relative w-full h-full px-4 mx-auto grid place-items-center">
          <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center gap-y-5">
            <div className="w-20 h-auto flex flex-col items-center justify-center">
              <span className="size-3 rounded-full bg-white" />
              <span className="w-[.75px] h-24 bg-white" />
            </div>
            <h3 className="uppercase text-white">
              <Link to="/knowus">Our Values</Link>
            </h3>
            <div className="w-20 h-auto flex flex-col items-center justify-center">
              <span className="w-[.75px] h-24 bg-white" />
              <span className="size-3 rounded-full bg-white" />
            </div>
          </div>
          <img
            src={landing2Img2}
            alt=""
            className="relative w-full h-auto object-cover object-center rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
