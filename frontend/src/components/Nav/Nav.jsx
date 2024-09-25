import React, { useState, useEffect } from "react";
import { logo } from "../../assets/img";
// import FlyoutLink from "../Links/flyoutLink";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { CiMenuKebab } from "react-icons/ci";

// const ServiceContent = () => {
//   return (
//     <div className="w-64 h-24 p-6 shadow-xl flex flex-col gap-2">
//       <NavLink to="/general-treatments">General Treatments</NavLink>
//       <NavLink to="/prosthodontics">Prosthodontic Treatments</NavLink>
//     </div>
//   );
// };

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <motion.nav
      variants={{
        visible: { y: "0" },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
      className="sticky top-0 z-[99] w-full bg-white py-2 flex items-center justify-center"
    >
      <div className="hidden relative w-full bg-white md:flex items-center justify-center font-medium px-4 sm:px-8 md:px-12">
        <div className="max-w-[1000px] w-full flex items-center justify-between">
          <ul className="w-full flex items-center justify-between">
            <div className="w-full h-[25px] flex items-center justify-around border-y-[1.5px] border-primary-pink pb-1">
              <li className="">
                <NavLink
                  to="/"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/know-us"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Know us
                </NavLink>
              </li>
            </div>

            <div className="px-2">
              <div className="w-[80px] h-[80px] flex items-center justify-center p-1 ml-5">
                <NavLink to="/">
                  <img
                    src={logo}
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </NavLink>
              </div>
            </div>

            <div className="w-full h-[25px] flex items-center justify-around border-y-[1.5px] border-primary-pink pb-1">
              <li className="">
                <NavLink
                  to="/stay"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Stay
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/dining"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Dining
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/events"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Events
                </NavLink>
              </li>
            </div>
          </ul>
        </div>

        <button
          className="hidden md:inline-block absolute top-4 right-4"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <div className="size-12 bg-primary-pink rounded-full grid place-items-center">
              <CiMenuKebab className="size-full p-2 text-white rotate-90" />
            </div>
          ) : (
            <div className="size-12 bg-primary-pink rounded-full grid place-items-center">
              <CiMenuKebab className="size-full p-2 text-white " />
            </div>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div className="w-full px-4 md:hidden bg-white py-2 ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="w-20 md:hidden" />
          <button
            className="md:hidden inline-block"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <div className="size-12 bg-primary-pink rounded-full grid place-items-center">
                <CiMenuKebab className="size-full p-2 text-white rotate-90" />
              </div>
            ) : (
              <div className="size-12 bg-primary-pink rounded-full grid place-items-center">
                <CiMenuKebab className="size-full p-2 text-white " />
              </div>
            )}
          </button>
        </div>
        <ul
          className={`md:hidden bg-white fixed z-40 w-full h-[100svh] top-0 left-0 py-28 px-8 
            flex flex-col gap-y-4 text-xl font-saveurRegular 
            transform transition-transform duration-500 ${open ? "translate-y-[0px]" : "-translate-y-full"}`}
          onClick={() => setOpen(false)}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/know-us">Know Us</NavLink>
          </li>
          <li >
            <NavLink to="/stay">Stay</NavLink>
          </li>
          <li >
            <NavLink to="/dining">Dining</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
