import React from "react";
import "./Made.scss";
import { Doorknob } from "../../components";
import { cassette, cassetteBg, madeImg } from "../../assets/img";

const Made = () => {
  return (
    <section className="realtive w-full h-full bg-primary-pink py-10 flex items-center justify-center">
      <div className="relative max-w-screen-2xl w-[1000px] h-full flex justify-around items-center">
        <div className="w-[375px] flex flex-col gap-y-5">
          <p className="text-xl font-ralewayRegular leading-10">
            The sound of laughter, music and life at its fullest. The oohs and
            the aahs, the “Wait, let's take a picture first!”
          </p>
          <h2 className="uppercase text-3xl font-saveurRegular leading-10 tracking-tight">
            At 17, everything is made-to-feel.
          </h2>
          <Doorknob />
        </div>
        <div className="relative size-[500px] p-5">
          <img src={madeImg} alt="" className="relative size-full z-1" />
          <div className="absolute bottom-0 right-0 size-[200px] flex items-center justify-center bg-white rounded-full">
            <img src={cassette} alt="" className="w-[190px] z-[3]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Made;
