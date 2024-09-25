import React, { useRef } from "react";
import "./Landing2.scss";
import {
  landing2BgImg1,
  landing2BgImg2,
  landing2BgImg3,
  landing2Img1,
  landing2Img2,
  landing2BgMobile,
  landingImg,
  donut,
  donutCrescent,
} from "../../assets/img";

import { motion, useScroll, useTransform } from "framer-motion";

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
const Landing2 = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: [" start start", "end end"],
  });

  let down = useTransform(scrollYProgress, [0, 1], ["5%", "35%"]);
  let up = useTransform(scrollYProgress, [1, 0], ["15%", "40%"]);
  // let up = useTransform(scrollYProgress, [0, 1], ["40%", "10%"]);

  return (
    <section className="landing2-section" ref={ref}>
      <img src={landing2BgImg1} alt="" className="landing2-bg-img1" />
      <motion.img
        style={{ originY: 1 }}
        animate={{ rotate: [-3, 0, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src={landing2BgImg2}
        alt=""
        className="landing2-bg-img2"
      />
      <motion.img
        style={{ y: up }}
        src={landing2BgImg3}
        alt=""
        className="landing2-bg-img3"
      />
      <img src={landing2BgMobile} alt="" className="landing2-bg-mobile1" />
      <img src={landing2BgMobile} alt="" className="landing2-bg-mobile2" />

      <div className="landing2-container">
        <div className="landing2-left">
          <motion.p className="landing2-para">
            Because making people feel great is probably the greatest feeling
            there is.
          </motion.p>
          <motion.div style={{ y: up }} className="landing2-img-conatiner">
            <div className="landing2-img-overlay"></div>
            <img src={landing2Img1} alt="" className="landing2-img" />

            <motion.div whileHover="hover" className="landing2-text-container">
              <motion.span
                variants={upArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-head"
              ></motion.span>
              <motion.span
                variants={upArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-body"
              ></motion.span>

              <p className="landing2-img-text">OUR STORY</p>

              <motion.span
                variants={downArrow}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="arrow-body"
              ></motion.span>
              <motion.span
                variants={downArrow}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="arrow-head"
              ></motion.span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div style={{ y: down }} className="landing2-right">
          <div className="landing2-img-container">
            <div className="landing2-img-overlay"></div>
            <img src={landing2Img2} alt="" className="landing2-img" />
            <motion.div whileHover="hover" className="landing2-text-container">
              <motion.span
                variants={upArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-head"
              ></motion.span>
              <motion.span
                variants={upArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-body"
              ></motion.span>

              <p className="landing2-img-text">OUR VALUES</p>

              <motion.span
                variants={downArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-body"
              ></motion.span>
              <motion.span
                variants={downArrow}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="arrow-head"
              ></motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    // <section className="relative conatiner h-[100%] flex items-center justify-center mb-10 pb-40">
    //   <img
    //     src={landing2BgImg1}
    //     alt=""
    //     className="absolute w-full md:w-[50%] h-auto object-cover px-5 top-0"
    //   />
    //   <div className="max-w-[1000px] w-full h-auto flex flex-col md:flex-row justify-between">
    //     <motion.div
    //       className="order-2 md:order-1 relative w-full sm:w-1/2 h-auto px-2 flex flex-col items-center justify-center"
    //       style={{ y: up }}
    //     >
    //       <img
    //         src={landing2Img1}
    //         alt=""
    //         className="w-full h-auto z-[12] p-10 md:px-14"
    //       />

    //       <h2 className="text-[clamp(1rem,10vw,1.5rem)] leading-[clamp(2rem,10vw,3rem)] font-ralewayRegular tracking-wide ">
    //         Because making people <br /> feel great is probably the <br />
    //         greatest feeling there is.
    //       </h2>
    //     </motion.div>

    //     <motion.div
    //       className="order-1 md:order-2 relative w-full sm:w-1/2 h-auto px-2"
    //       style={{ y: down }}
    //     >
    //       <img
    //         src={landing2Img2}
    //         alt=""
    //         className="relative w-full h-auto z-[12] p-10 md:p-14"
    //       />
    //     </motion.div>
    //   </div>
    // </section>
  );
};

export default Landing2;
