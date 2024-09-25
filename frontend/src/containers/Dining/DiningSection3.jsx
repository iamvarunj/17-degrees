import React from "react";
import { tasteBg1, tasteBg3, tasteSection4 } from "../../assets/img";

const DiningSection3 = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-x-clip">
         <div className="absolute z-[12] w-[15%] h-auto -right-[2rem] bottom-0">
        <img src={tasteBg1} alt="" className="size-full" />
      </div>

      <div className="max-w-screen-3xl w-[900px] h-full flex items-center justify-around py-4 ">
        <div className="w-1/3">
          <img
            src={tasteSection4}
            alt=""
            className="w-[90%] h-auto object-contain"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-between px-10">
          <div className="">
            <h2 className="uppercase font-saveurLight text-primary-pink">
              17 Degrees BAKING CO
            </h2>
            <h4 className="">
              Happiness is… sitting around a piece of cake with a bunch of
              friends, taking small bites out of it trying to make it last
              longer, just so you can laugh longer.
            </h4>
          </div>
          <p className="my-4 w-full text-sm leading-5">
            With a menu curated by Bakery Chef Manisha Todi, the Baking Co.
            offers an array of delectable sweets and savouries. From a variety
            of breads to croissants, puffs, and one of our bestsellers - the
            muffin - our cafe is the ideal spot for laid back conversations.
            Grab a bite, sip on some of the best coffee in town and catch up on
            the latest gossip.
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

export default DiningSection3;
