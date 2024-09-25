import React from "react";
import { doorknobSpaces, doorknobStay, doorknobTaste } from "../../assets/img";
import { delay, motion } from "framer-motion";

import "./Doorknob.scss";
const animation = {
  hover: {
    rotateZ: [0, 2, 0],
    transition: {
      duration: 0.3,

    }
  },
  initial: {
    opacity: 0,
    x: -50,
  },  
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2 * index,
    },
  }),
};

const Doorknobs = [
  {
    id: 1,
    img: doorknobStay,
    text: "Stay",
  },
  {
    id: 2,
    img: doorknobTaste,
    text: "Taste",
  },
  {
    id: 3,
    img: doorknobSpaces,
    text: "Spaces",
  },
];
const Doorknob = () => {
  return (
    <motion.div className="doorknobs-container">
      {Doorknobs.map((doorknob, index) => (
        <motion.div
          whileHover="hover"
          variants={animation}
          initial="initial"
          whileInView="animate"
          custom={index}
          className="made-doorknobs"
          key={doorknob.id}
        >
          <div className="made-doorknob">
            <p className="dot"></p>
            <div className="doorknob-content">
              <img src={doorknob.img} alt="" className="made-doorknob-img" />
              <p className="doorknob-text">{doorknob.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Doorknob;
