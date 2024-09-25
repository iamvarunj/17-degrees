import React from "react";
import { spacesSection6Img1, spacesSection6Img2 } from "../../assets/img";

const spacesData = [
  {
    name: "Chef - SK Imteyaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img1,
  },
  {
    name: "Manager - Bikash",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img2,
  },
  {
    name: "Chef - SK Imteyaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img1,
  },
  {
    name: "Manager - Bikash",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img2,
  },
  {
    name: "Chef - SK Imteyaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img1,
  },
  {
    name: "Manager - Bikash",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img2,
  },
  {
    name: "Chef - SK Imteyaj",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img1,
  },
  {
    name: "Manager - Bikash",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt etxut labore.",
    img: spacesSection6Img2,
  },
];

const KnowUsSection6 = () => {
  return (
    <section className="relative w-full h-full bg-white py-10 flex items-center justify-center" id="team">
      <div className=" max-w-screen-3xl w-[900px] h-full flex flex-wrap gap-y-10 py-5">
        {spacesData.map((data, index) => (
          <div className="w-1/2 flex items-center justify-center p-4" key={index}>
            <div className="relative w-full flex items-center justify-center ">
              <div className="absolute -bottom-2 -left-2 size-full rounded-full border-[1.25px] border-secondary-blue" />
              <img
                src={data.img}
                alt=""
                className="size-full object-contain z-[1]"
              />
            </div>
            <div className="space-y-1 px-5">
              <h5 className="text-[clamp(1rem,5vw,1.5rem)] text-primary-pink">
                {data.name}
              </h5>
              <p className="leading-[clamp(0.75rem,5vw,1.25rem)]">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowUsSection6;
