import React from "react";
import { tasteBg3, tasteSection3 } from "../../assets/img";

const DiningSection2 = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-x-clip">
         <div className="absolute z-[12] w-[15%] h-auto -right-[2rem] bottom-0">
        <img src={tasteBg3} alt="" className="size-full" />
      </div>

      <div className="max-w-screen-3xl w-[900px] h-full flex items-center justify-around py-4">
        <div className="w-1/3">
          <img
            src={tasteSection3}
            alt=""
            className="w-[90%] h-auto object-contain"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-between px-10">
          <div className="">
            <h2 className="uppercase font-saveurLight text-primary-pink">
              EQUATOR
            </h2>
            <h4 className="">
              This house runs on love, laughter and bottles of cold beer…
            </h4>
          </div>
          <p className="my-4 w-full text-sm leading-5">
            With an ambience inspired by nature and a menu that compliments
            casual drinking with friends, Equator thrives on making people feel
            good. From handcrafted cocktails with mini 'fruit-sculpture' garnish
            to playful snacks, Equator is an experience you want more of.
          </p>
          <div className="w-full mt-3 space-x-4">
            <button className="w-[150px] h-[45px] rounded-full text-white bg-primary-pink font-ralewayRegular">
              <p>See Our Menu</p>
            </button>
            <button className="w-[150px] h-[45px] rounded-full text-black bg-primary-blue border border-primary-pink font-ralewayRegular">
              <p>View Photos</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection2;
