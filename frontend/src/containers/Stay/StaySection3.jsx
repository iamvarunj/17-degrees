import React from "react";
import {
  stayAirConditioner,
  stayBreakfast,
  stayDoctor,
  stayLaundry,
  stayRoomService,
  stayTravelDesk,
  stayWifi,
} from "../../assets/img";

const stayData = [
  {
    text: "Complimentary Breakfast",
    img: stayBreakfast,
  },
  {
    text: "24 Hours Room Service",
    img: stayRoomService,
  },
  {
    text: "Complimentary Wi-Fi",
    img: stayWifi,
  },
  {
    text: "Laundry",
    img: stayLaundry,
  },
  {
    text: "Doctory on Call",
    img: stayDoctor,
  },
  {
    text: "Centrally Air-Conditioned",
    img: stayAirConditioner,
  },
  {
    text: "Travel Desk",
    img: stayTravelDesk,
  },
  {
    text: "Doctory on Call",
    img: stayDoctor,
  },
];

const StaySection3 = () => {
  return (
    <section className="w-full h-full bg-primary-blue py-10 flex items-center justify-center">
      <div className="max-w-screen-3xl w-[1000px] h-full">
        <div className="w-full flex flex-wrap gap-y-6 justify-between">
          {stayData.map((data, index) => (
            <div
              key={index}
              className="w-1/4 flex flex-col items-center justify-center text-center gap-y-4"
            >
              <div className="size-[70px] flex items-center justify-center bg-white rounded-full p-4">
                <img src={data.img} alt="" className="size-full object-contain" />
              </div>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaySection3;
