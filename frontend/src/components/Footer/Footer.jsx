import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";
import { ig, fb, logo } from "../../assets/img";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="size-full bg-white">
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between md:px-20">
        <div className="order-3 md:order-1 w-full md:w-1/2 flex items-center justify-center md:justify-start border-y-[1.5px] md:border-primary-pink mx-5">
          <p className="px-4">© 17 Degrees. All rights reserved.</p>
        </div>

        <Link
          to="/"
          className="order-1 md:order-2 size-[90px] flex items-center justify-center"
        >
          <img
            src={logo}
            alt=""
            className="w-full h-auto object-cover object-center"
          />
        </Link>

        <div className="order-2 md:order-3 w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center md:justify-around border-y-[1.5px] gap-2 mx-5 md:border-primary-pink">
          <div className="flex flex-col md:flex-row items-center justify-around gap-2">
            <Link>
              <p>Privacy policy</p>
            </Link>
            <Link>
              <p>Terms & Conditions</p>
            </Link>
          </div>
          <div className="flex gap-2 items-center justify-around">
            <Link to="/" className="">
              <FaFacebookF />
            </Link>
            <Link to="/" className="">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
