import React from "react";
import "./Review.scss";
import { quoteEnd, quoteStart, reviewsProfile1 } from "../../assets/img";

const Review = () => {
  return (
    <div className="review-left">
      <div className="review-text-container">
        <img src={quoteStart} alt="" className="quote-start" />
        <p className="review-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <img src={quoteEnd} alt="" className="quote-end" />
      </div>

      <div className="review-profile">
        <img src={reviewsProfile1} alt="" className="review-profile-img" />
        <p className="review-name">Vaibhav Sharma</p>
      </div>
    </div>
  );
};

export default Review;
