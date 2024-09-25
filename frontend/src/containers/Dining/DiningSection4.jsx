import React from "react";
import { tasteBg4, tasteSection5 } from "../../assets/img";

const DiningSection4 = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-x-clip">
      <div className="absolute z-[12] w-[15%] h-auto -right-[2rem] bottom-0">
        <img src={tasteBg4} alt="" className="size-full" />
      </div>

      <div className="max-w-screen-3xl w-[900px] h-full flex items-center justify-around py-4 ">
        <div className="w-1/3">
          <img
            src={tasteSection5}
            alt=""
            className="w-[90%] h-auto object-contain"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-between px-10">
          <div className="">
            <h2 className="uppercase font-saveurLight text-primary-pink">
              The other side
            </h2>
            <h4 className="">
              The feeling of lounging in a forest but on fancy art deco chairs.
            </h4>
          </div>
          <p className="my-4 w-full text-sm leading-5">
            The latest addition to our portfolio, Tropic of 17 is an upcoming
            bar and lounge in the heart of Dhanbad's shopping promenade. Retro
            decor set amidst lush greenery gives this place its unique tropical
            vibe. With a menu that reimagines local cuisine and includes 17's
            quintessential hits, this new place promises to keep the good times
            rolling.
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

export default DiningSection4;
