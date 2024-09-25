import React from "react";
import "./Locations.scss";

import { location } from "../../assets/img";

// const Pins = () => [{ id: 1, img: location, text: "Dhanbad" }];
const Locations = () => {
  return (
    <div className="location-container">
      <h3 className="location-heading">Locations</h3>
      <div className="location-img-container">
        <img src={location} alt="" className="location-img" />
        <img src={location} alt="" className="location-img" />
        <img src={location} alt="" className="location-img" />
        <img src={location} alt="" className="location-img" />
      </div>
    </div>
  );
};

export default Locations;
