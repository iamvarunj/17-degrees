import React, { useState } from "react";
import {
  donut,
  donutCrescent,
  staysection2bg1,
  staysection2img1,
  staysection2img2,
  staysection2img3,
} from "../../assets/img";
import { motion, useScroll, useTransform } from "framer-motion";

const text = [
  "Presidential Suite",
  "Executive Suite",
  "Superior Room",
  "Deluxe Room",
  "Regular Deluxe Room",
];

const img = [
  staysection2img1,
  staysection2img2,
  staysection2img3,
  staysection2img1,
  staysection2img2,
];

const StaySection2 = () => {
  const { scrollYProgress } = useScroll();
  const imgDownAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="realtive w-full h-full bg-primary-blue pt-20 flex items-center justify-center">
      <div className=" max-w-screen-2xl w-[1000px] h-full flex flex-col justify-between items-center">
        <div className="relative w-full flex">
          <h2 className="relative z-[12] font-ralewayLight">
            It starts <br /> with a <br /> good night's <br />
            sleep.
          </h2>
          <motion.div
            style={{ y: imgDownAnimation }}
            className="absolute z-0 w-[180px] left-[22%] -top-[25%]"
          >
            <img src={staysection2bg1} alt="" />
          </motion.div>
        </div>
        <div className="w-full h-[500px] flex justify-between items-center gap-x-7">
          <div className="w-1/3 h-fit flex flex-col justify-center items-start border-t border-black mx-2">
            {text.map((text, index) => (
              <div className="w-full flex flex-col items-start p-1" key={index}>
                <button
                  className={
                    toggle === index
                      ? "h-full text-lg font-ralewayMedium text-primary-pink px-5 py-2"
                      : "h-full text-lg font-ralewayMedium text-primary-brown px-5 py-2"
                  }
                  onClick={() => toggleTab(index)}
                >
                  {text}
                </button>
                <div className="w-full h-[0.5px] bg-black" />
              </div>
            ))}
          </div>

          <div className="relative w-1/3 h-full">
            <h1 className="absolute z-2 text-primary-pink bottom-8 -left-60">
             Our Rooms
            </h1>
            <div className="w-full h-full rounded-full flex items-center justify-center">
              {img.map((img, index) => (
                <img
                  src={img}
                  alt=""
                  className={
                    toggle === index
                      ? "z-1 w-full h-full rounded-full object-cover object-center"
                      : "hidden"
                  }
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className="w-1/3 h-full flex flex-col items-center justify-center">
            <p className="">
              Unwind at one of our rooms and suites carefully designed to make
              your stay comfortable.
            </p>
            <p className="">
              The warm lighting creates a cozy ambience. The rich upholstery
              compliments the dark wood finish of the furniture. Every bed is
              fitted with the softest fabrics, fluffy pillows and a twelve-inch
              thick mattress with high density foam. So you wake up recharged
              and ready to seize the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaySection2;
