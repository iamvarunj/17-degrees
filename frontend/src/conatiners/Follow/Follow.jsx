import React from "react";
import { motion } from "framer-motion";
import "./Follow.scss";
import {
  followBgImg1,
  followBgImg2,
  followImg1,
  followImg2,
  followImg3,
  followImg4,
  followImg5,
} from "../../assets/img";
import { Link } from "react-router-dom";

const Follow = () => {
  return (
    <section className="follow-section">
      <div className="follow-heading-container">
        <a href="https://www.instagram.com/17degreeshotel" target="_blank">
          <h2 className="uppercase text-7xl text-primary-pink font-saveurLight tracking-wide">
            Follow
          </h2>
          <p className="uppercase text-5xl text-primary-pink font-saveurLight tracking-wide">
            @17DEGREESHOTEL
          </p>
        </a>
      </div>
      <div className="follow-img-conatiner-upper">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="upper-marquee"
        >
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg1} alt="" className="follow-img1" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg2} alt="" className="follow-img2" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="upper-marquee"
        >
          <div className="empty-img" />
          <div className="empty-img" />
          <div className="empty-img" />
          <div className="empty-img" />
          <img src={followImg1} alt="" className="follow-img1" />
          <div className="empty-img" />
          <div className="empty-img" />
          <div className="empty-img" />
          <img src={followImg2} alt="" className="follow-img2" />
          <div className="empty-img" />
          <div className="empty-img" />
          <div className="empty-img" />
          <div className="empty-img" />
        </motion.div>
      </div>
      <div className="follow-img-conatiner-lower">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="lower-marquee"
        >
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg3} alt="" className="follow-img3" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg4} alt="" className="follow-img4" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg5} alt="" className="follow-img5" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="lower-marquee"
        >
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg3} alt="" className="follow-img3" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg4} alt="" className="follow-img4" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <img src={followImg5} alt="" className="follow-img5" />
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
          <div className="empty-img"></div>
        </motion.div>
      </div>

      <img src={followBgImg1} className="follow-bg-img1" />
      <img
        src={followBgImg2}
        className="absolute w-[300px] right-20 bottom-0"
      />
    </section>
  );
};

export default Follow;
