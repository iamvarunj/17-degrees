import React, { useRef, useState } from "react";
import {
  DiningSection1,
  DiningSection2,
  DiningSection3,
  DiningSection4,
} from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Dining.css";
import DropdownMenu from "./DropdownDining";
import DinningNavbar from "./DiningNavbar";

const sections = [
  { label: "17 Degrees, Dhanbad", component: <DiningSection1 /> },
  { label: "Equator", component: <DiningSection2 /> },
  { label: "17 Degrees Baking Co", component: <DiningSection3 /> },
  { label: "The other side", component: <DiningSection4 /> },
  { label: "17 Degrees, Patna", component: <DiningSection1 /> },
];

const DiningCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <>
      <DinningNavbar
        sections={sections}
        activeIndex={activeIndex}
        handleButtonClick={handleButtonClick}
      />

      <DropdownMenu
        sections={sections}
        activeIndex={activeIndex}
        handleButtonClick={handleButtonClick}
      />

      <Swiper
        ref={swiperRef}
        pagination={true}
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full my-5">
              {section.component}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DiningCarousel;
