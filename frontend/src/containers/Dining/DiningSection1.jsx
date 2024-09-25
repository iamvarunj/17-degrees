import React from "react";
import { tasteBg2, tasteSection2 } from "../../assets/img";

const DiningSection1 = () => {
  return (
    <section className="relative w-full h-full flex justify-center overflow-x-clip">
      <div className="absolute z-[12] w-[15%] h-auto -right-[2rem] bottom-0 ">
        <img src={tasteBg2} alt="" className="size-full" />
      </div>
      <div className="max-w-screen-3xl w-[900px] h-full flex items-center justify-around py-4 ">
        <div className="w-1/3">
          <img
            src={tasteSection2}
            alt=""
            className="w-[90%] h-auto object-contain"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-between px-10">
          <div className="">
            <h2 className="uppercase font-saveurLight text-primary-pink">
              {" "}
              17 degrees, Dhanbad
            </h2>
            <h4 className="">
              Because everyday has the potential to get better.
            </h4>
          </div>
          <p className="my-4 w-full text-sm leading-5">
            If there's something that's remained unchanged since 2004 it's our
            food and service. And we're pretty sure this is what has got us a
            following in Dhanbad and Patna. Because if you like the food, and
            the people who bring it to you, you're probably going to come back
            for more. From delectable kebabs to cool Asian recipes, from a bit
            of continental to a whole lot of happy guests, we at 17 know what it
            takes to make your day - quality food, good service. There is no
            secret ingredient.
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

export default DiningSection1;
