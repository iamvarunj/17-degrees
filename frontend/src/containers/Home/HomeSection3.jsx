import React from "react";
import { bannerImg, bannerOverlay } from "../../assets/img";
import { delay, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const line1 = "Feel-good hospitality";
const line2 = "takes warmth, authenticity";
const line3 = "and genuine care.";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 0.35,
    },
  },
};

const text = {
  hidden: { opacity: 0, x: -150 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
     
      duration: 0.75,
    },
  },
};

const HomeSection3 = () => {
  const navigate = useNavigate();

  return (
    <section className="relative conatiner h-[100%] flex items-center justify-center pt-10">
      <div className="relative w-full h-[600px] bg-black">
        <motion.img
          src={bannerOverlay}
          alt=""
          className="absolute w-full h-full object-cover object-center"
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
        />
        <img
          src={bannerImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        className="absolute pt-32 flex flex-col items-center gap-y-2"
      >
        <motion.h2
          className="text-[clamp(1.5rem,5vw,3rem)]  text-white text-center"
          variants={text}
        >
          {line1}
        </motion.h2>
        <motion.h2
          className="text-[clamp(1.5rem,5vw,3rem)]  text-white text-center"
          variants={text}
        >
          {line2}
        </motion.h2>
        <motion.h2
          className="text-[clamp(1.5rem,5vw,3rem)]  text-white text-center"
          variants={text}
        >
          {line3}
        </motion.h2>

        <motion.div variants={text} className="my-4">
          <button
            className="py-3 px-6 rounded-full bg-primary-pink"
            onClick={() => navigate("/knowus/#team ")}
          >
            <h4 className="text-white">Meet Team 17</h4>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection3;
