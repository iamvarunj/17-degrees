import { motion } from "framer-motion";
import React from "react";

const ScrollDown = () => {
  return (
    <motion.div
      className="flex items-center justify-center gap-x-5 rotate-90"
      initial={{
          rotate: 90,
      }}
      whileInView={{
        y: [-5, 5 ,-5]
      }}
      transition={{
        delay: 2,
        duration: 1.35,
        repeat: 4,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-fit uppercase font-ralewayMedium tracking-wider text-md">
        scroll down
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute block size-[30px] border-2 border-primary-brown rounded-full" />
        <div className="absolute size-[9px] border-l-2 border-b-2 border-primary-brown -rotate-[135deg]" />
      </div>
    </motion.div>
  );
};

export default ScrollDown;
