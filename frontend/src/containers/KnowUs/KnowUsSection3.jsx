import React, { useRef } from "react";
import {
  knowusImg1,
  knowusImg2,
  knowusImg3,
  knowusImg4,
  knowusImgBorder,
  reviewsImg1Border,
  spacesSection3Img1,
  spacesSection3Img2,
  spacesSection3Img3,
  spacesSection3Img4,
} from "../../assets/img";

import { motion, useScroll, useTransform } from "framer-motion";

const KnowUsSection3 = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: [" start start", "end end"],
  });

  let down = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  let up = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <section
      className="relative w-full h-full flex items-center justify-center py-10"
      name="values"
    >
      <div className=" max-w-screen-3xl w-[1100px] h-full">
        <div className="relative w-full flex items-center justify-center gap-x-2 my-5">
          <h1 className="uppercase text-secondary-blue/50 text-[clamp(3rem,10vw,6rem)] px-20">
            Our
          </h1>
          <div className="relative w-[200px] h-auto">
            <motion.img
              style={{ y: up }}
              src={knowusImg1}
              alt=""
              className="relative z-[2] w-full h-auto object-cover"
            />
            <motion.img
              style={{ y: down }}
              src={knowusImgBorder}
              alt=""
              className="absolute z-[1] w-full h-auto bottom-0 -right-5 object-cover"
            />
          </div>
          <motion.div className="w-1/3 space-y-2 px-10">
            <h4 className="text-primary-pink">A passion for people</h4>
            <p className="leading-[clamp(1rem,5vw,1.5rem)]">
              Everything we do - from setting the highest quality standards to
              providing impeccable service - is to make people happy.
            </p>
          </motion.div>
        </div>

        <div className="w-full h-full flex items-start">
          <div className="w-1/2 h-full flex">
            <div className="relative w-[400px] h-auto">
              <motion.img
                style={{ y: up }}
                src={knowusImg2}
                alt=""
                className="relative z-[2] w-full h-auto object-cover"
              />
              <motion.img
                style={{ y: down }}
                src={knowusImgBorder}
                alt=""
                className="absolute z-[1] w-full h-auto bottom-0 -right-5 object-cover"
              />
            </div>

            <div className="px-5 space-y-10">
              <div className="px-5 space-y-2">
                <h4 className="text-primary-pink ">Not bound by convention</h4>
                <p className="leading-[clamp(1rem,5vw,1.5rem)]">
                  Finding new ways of doing things is where much of the fun -
                  and our success - lies.
                </p>
              </div>
              <h1 className="uppercase text-secondary-blue/50 text-[clamp(3rem,10vw,6rem)] px-2">
                Values
              </h1>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 space-y-10">
              <h1 className="uppercase text-secondary-blue/50 text-[clamp(3rem,10vw,6rem)] ">
                Core
              </h1>
              <div className="relative w-[200px] h-auto">
                <motion.img
                  style={{ y: up }}
                  src={knowusImg3}
                  alt=""
                  className="relative z-[2] w-full h-auto object-cover"
                />
                <motion.img
                  style={{ y: down }}
                  src={knowusImgBorder}
                  alt=""
                  className="absolute z-[1] w-full h-auto bottom-0 -right-5 object-cover"
                />
              </div>
            </div>
            <div className="px-5 space-y-2">
              <h4 className="text-primary-pink">
                Create, perfect, charm, repeat
              </h4>
              <p className="leading-[clamp(1rem,5vw,1.5rem)]">
                Maintaining standards is as important as setting them. Which is
                why everything that we do - the cocktails, the kaali daal, the
                puffs and muffins, the rooms, the service - we do it
                consistently good.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-center gap-x-10 py-5">
          <div className="relative w-[200px] h-auto">
            <motion.img
              style={{ y: up }}
              src={knowusImg4}
              alt=""
              className="relative z-[2] w-full h-auto object-cover"
            />
            <motion.img
              style={{ y: down }}
              src={knowusImgBorder}
              alt=""
              className="absolute z-[1] w-full h-auto bottom-0 -right-5 object-cover"
            />
          </div>
          <div className="w-1/3 space-y-2 px-5">
            <h4 className="text-primary-pink">Drive culture</h4>
            <p className="leading-[clamp(1rem,5vw,1.5rem)]">
              We always seek to introduce our patrons to new tastes and to
              provide experiences that make them feel special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection3;
