import React from "react";
import {
  staysection4Img1,
  staysection4Img2,
  staysection4Img3,
  staysection4Img4,
  staysection4Img5,
  staysection4Img6,
} from "../../assets/img";
import { motion } from "framer-motion";

const StaySection4 = () => {
  return (
    <section className="realtive w-full h-full bg-white py-10 flex flex-col items-center justify-center">
      <div className=" max-w-screen-2xl w-[900px] h-full flex justify-around items-center py-5">
        <div className="w-1/2 space-y-2">
          <h2 className="uppercase font-saveurLight">The</h2>
          <h1 className="uppercase text-[clamp(3rem,10vw,5.5rem)] text-primary-pink">
            1<span className="pl-4">7</span> degrees
          </h1>
          <h1 className="uppercase text-[clamp(3rem,10vw,5.5rem)] text-center">
            Vibe
          </h1>
        </div>
        <div className="w-1/2 ">
          <p className="">
            We offer an array of spaces to get together at 17 Degrees - from
            lounge bar to dining to café to banquet and corporate meeting
            venues. Warm and inviting décor paired with an impeccable service,
            rest assured we know what it takes to make your day.
          </p>
        </div>
      </div>
      <div className="relative max-w-screen-2xl w-full h-[700px] flex items-center justify-center">
        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1, x: 200, y: -200 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-[120px] h-[220px]">
            <img
              src={staysection4Img2}
              alt=""
              className="size-full object-contain object-center"
            />
          </div>
          <div className="w-fit flex flex-col items-center justify-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              17 Degrees <br /> Restaurant
            </p>
            <div className="w-full flex items-center">
              <span className="w-full h-[1px] bg-primary-brown" />
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1 , x: -375, y: 150 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-fit flex flex-col items-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              Living Rooms, <br /> Party Rooms
            </p>
            <div className="w-full flex items-center">
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
              <span className="w-full h-[1px] bg-primary-brown" />
            </div>
          </div>
          <div className="w-[120px] h-[180px]">
            <img src={staysection4Img3} alt="" className="w-full h-full" />
          </div>
        </motion.div>

        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1, x: 100, y: 250 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-[120px] h-[180px]">
            <img src={staysection4Img4} alt="" className="w-full h-full" />
          </div>
          <div className="w-fit flex flex-col items-center justify-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              Sky Room <br />
              Terrace Garden
            </p>
            <div className="w-full flex items-center">
              <span className="w-full h-[1px] bg-primary-brown" />
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1, x: 0, y: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-[120px] h-[180px]">
            <img src={staysection4Img1} alt="" className="w-full h-full" />
          </div>
          <div className="w-fit flex flex-col items-center justify-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              Equator <br />
              Bar & Lounge
            </p>
            <div className="w-full flex items-center">
              <span className="w-full h-[1px] bg-primary-brown" />
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1, x: 350, y: 50 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-fit flex flex-col items-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              Equator on the
              <br /> Rocks
            </p>
            <div className="w-full flex items-center">
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
              <span className="w-full h-[1px] bg-primary-brown" />
            </div>
          </div>
          <div className="w-[120px] h-[180px]">
            <img src={staysection4Img5} alt="" className="w-full h-full" />
          </div>
        </motion.div>

        <motion.div
          className="absolute hover:text-primary-pink flex items-center justify-center gap-x-3  rounded-md"
          initial={{ scale: 1, x: -250, y: -150 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05, ease: "easeInOut" }}
        >
          <div className="w-[120px] h-[180px]">
            <img src={staysection4Img6} alt="" className="w-full h-full" />
          </div>

          <div className="w-fit flex flex-col items-center justify-center">
            <p className="w-full font-ralewayRegular text-sm px-3">
              17 Degrees <br />
              Baking Company
            </p>
            <div className="w-full flex items-center">
              <span className="w-full h-[1px] bg-primary-brown" />
              <span className="w-[10px] h-[10px] rounded-full bg-primary-brown" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaySection4;
