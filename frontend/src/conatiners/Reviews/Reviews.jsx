import React from "react";
import "./Reviews.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  reviewsImg1,
  reviewsImg2,
  reviewsImg3,
  reviewsImg1Border,
  reviewsImg2Border,
  reviewsImg3Border,
} from "../../assets/img";
import Review from "../../components/Review/Review";

const Reviews = () => {
  const { scrollYProgress } = useScroll();
  const imgAnimation = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-text">
          <motion.p
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="reviews-text-para"
          >
            We <br />
            <motion.span
              whileInView={{ opacity: [0, 1] }}
              transition={{ delay: 0.1, duration: 1.5, ease: "easeInOut" }}
              className="text-span1"
            >
              thrive on <br />
            </motion.span>
            <motion.span
              whileInView={{ opacity: [0, 1] }}
              transition={{ delay: 0.15, duration: 1.5, ease: "easeInOut" }}
              className="text-span2"
            >
              what our <br />
            </motion.span>
            <motion.span
              whileInView={{ opacity: [0, 1] }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
              className="reviews-text-span"
            >
              GUESTS
            </motion.span>{" "}
            <br />
            <motion.span
              whileInView={{ opacity: [0, 1] }}
              transition={{ delay: 0.25, duration: 1.5, ease: "easeInOut" }}
              className="text-span3"
            >
              FEEL
            </motion.span>
          </motion.p>
        </div>
        <div className="review-wrapper1">
          <div className="review-empty"></div>
          <Review />
          <div className="review-img-container">
            <img
              src={reviewsImg1Border}
              alt=""
              className="review-img1-border"
            />
            <motion.img
              style={{ y: imgAnimation }}
              src={reviewsImg1}
              alt=""
              className="review-img1"
            />
          </div>
        </div>
        <div className="review-wrapper2">
          <div className="review-wrapper3">
            <div className="review-img-container">
              <img
                src={reviewsImg2Border}
                alt=""
                className="review-img2-border"
              />
              <motion.img
                style={{ y: imgAnimation }}
                src={reviewsImg2}
                alt=""
                className="review-img2"
              />
            </div>
            <Review />
          </div>
          <div className="review-wrapper4">
            <Review />
            <div className="review-img-container">
              <img
                src={reviewsImg3Border}
                alt=""
                className="review-img3-border"
              />
              <motion.img
                style={{ y: imgAnimation }}
                src={reviewsImg3}
                alt=""
                className="review-img3"
              />
            </div>
          </div>
          <img src={reviewsImg3} alt="" className="review-img3-mobile" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
