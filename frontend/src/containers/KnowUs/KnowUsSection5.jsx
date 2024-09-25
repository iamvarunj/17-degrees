import React from "react";
import {
  donut,
  donutCrescent,
  knowusCloud1,
  knowusCloud2,
  knowusCloud3,
  spacesSection5,
} from "../../assets/img";
import { motion } from "framer-motion";

const KnowUsSection5 = () => {
  return (
    <section className="relative w-full h-full bg-white pt-10 flex items-center justify-center">
      <div className="relative max-w-screen-2xl w-[1000px] h-full flex items-center justify-center gap-x-10">
        {/* Left */}
        <div className="relative w-1/2 h-[250px] flex items-center justify-center">
          <motion.img
            src={knowusCloud1}
            alt=""
            className="absolute z-[1] w-[30%] top-0"
            initial={{ x: 80  }}
            whileInView={{ x: 100 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
          <motion.img
            src={knowusCloud2}
            alt=""
            className="absolute z-[3] w-[40%] bottom-[25%]"
            initial={{ x: -120 }}
            whileInView={{ x: -160 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
          <motion.img
            src={knowusCloud3}
            alt=""
            className="absolute z-[3] w-[60%] bottom-[5%]"
            initial={{ x: 100}}
            whileInView={{ x: 130}}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
          <motion.div className="absolute z-[2] size-[180px] top-[5%] left-[30%]" 
          
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <img src={donut} alt="" className="relative  size-full" />
            <img
              src={donutCrescent}
              alt=""
              className="absolute right-[30%] top-[31%]"
            />
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative px-5">
          <h1 className="uppercase">
            The Team
          </h1>
          <h3 className="uppercase ">
            That makes it
          </h3>
          <h1 className="uppercase">
            Happen
          </h1>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection5;
