import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { hamburgerOpen, logo } from "../../assets/img";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
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

  return (
    <motion.header
      variants={{
        visible: { y: "0" },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
      className="w-full h-[65px] flex items-center justify-center bg-white sticky top-0 z-[1000] overflow-hidden py-10"
    >
      <nav className="w-full grid place-items-center">
        <div className="hidden w-[900px] md:flex items-center justify-center">
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
                  to="/knowus"
                  className="uppercase text-sm font-ralewayRegular tracking-wider"
                >
                  Know us
                </NavLink>
              </li>
            </div>

            <div className="px-2">
              <div className="w-[80px] h-[80px] flex items-center justify-center p-1 ml-5">
                <Link to="/">
                  <img
                    src={logo}
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </Link>
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
                  to="/taste"
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

        {/* mobile nav */}
        <div className="relative z-[1000] w-full flex justify-between items-center py-2 px-4">
          <img
            src={logo}
            alt=""
            className="block md:hidden w-20 h-auto object-cover object-center"
          />

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
          className={`md:hidden w-full h-screen bg-white flex flex-col items-center justify-center 
            absolute top-0 z-[900] transform transition-transform duration-500 ${open ? "translate-y-[0px]" : "-translate-y-full"}`}
          onClick={() => setOpen(false)}
        >
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
              to="/knowus"
              className="uppercase text-sm font-ralewayRegular tracking-wider"
            >
              Know us
            </NavLink>
          </li>
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
              to="/taste"
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
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
