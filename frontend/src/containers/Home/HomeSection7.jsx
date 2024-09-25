import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../../components";
import { contactImg, location } from "../../assets/img";

const HomeSection6 = () => {
  return (
    <section className="conatiner w-full h-full bg-primary-pink/10 flex items-center justify-center py-20">
      <div className="max-w-[1000px] w-full h-full flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <motion.img
            style={{ originY: "50%" }}
            whileInView={{ rotateZ: [2, 0, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 0.25,
              ease: "easeInOut",
            }}
            src={contactImg}
            alt=""
            className="absolute -left-[28%] w-[40%] h-auto object-contain"
          />
          <h2 className="uppercase font-saveurRegular text-primary-pink">
            Contact Us
          </h2>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row gap-x-10 gap-y-5 py-10 px-4">
          <div className="relative w-full sm:w-1/2 h-fit px-2 space-y-4 ">
            <h4 className="">Registered Office</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              quibusdam tempore laudantium sint quaerat? Odit molestiae harum
              distinctio omnis quos praesentium nisi. Ad, minus nam.
            </p>
            <div className="space-y-4">
              <h4>Locations</h4>
              <div className="flex gap-x-5">
                <img
                  src={location}
                  alt=""
                  className="w-[55px] h-auto object-contain"
                />
                <img
                  src={location}
                  alt=""
                  className="w-[55px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-1/2 h-fit px-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
