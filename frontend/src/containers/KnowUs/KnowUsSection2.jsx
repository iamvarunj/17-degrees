import React from "react";
import { bicycle, milestone, skid } from "../../assets/img";
import { motion } from "framer-motion";

const KnowUsSection2 = () => {
  return (
    <section className="relative w-full h-full md:h-[500px] flex items-center justify-center">
      <div className=" max-w-screen-2xl w-[900px] h-full flex justify-between items-start ">
        <div className="relative w-1/2 h-full">
          <img
            src={milestone}
            alt=""
            className="absolute w-full h-auto object-contain"
          />
          <div className="absolute bottom-[5.7rem] right-0 w-[200px] h-[100px]">
            <motion.img
              src={skid}
              alt=""
              className="absolute left-0 bottom-0 w-[20%] h-auto object-contain"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeIn" }}
            />
            <motion.img
              src={bicycle}
              alt=""
              className="absolute right-0 bottom-0 w-[85%] h-auto object-contain"
              initial={{ x: -110 }}
              whileInView={{ x: 10 }}
              transition={{ duration: 1, ease: "easeIn" }}
            />
          </div>
        </div>

        <div className="w-1/2 h-full px-10 py-10">
          <p className="">
            What started as a restaurant, over the years transformed to offer an
            elevated cosmopolitan experience in Dhanbad, and Patna, by expanding
            its portfolio to include more f&b outlets, a boutique hotel, a
            contemporary lounge and a delectable bakery. From introducing
            eclectic cocktails to artisanal breads and bakery products - 17
            Degrees is more than a hospitality brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowUsSection2;
