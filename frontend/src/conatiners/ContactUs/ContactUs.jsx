import React from "react";
import "./ContactUs.scss";
import { ContactForm, Locations } from "../../components";
import { contactImg } from "../../assets/img";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-heading-container">
        <motion.img
          style={{ originY: "50%" }}
          whileInView={{ rotateZ: [2, 0, 2] }}
          transition={{
            delay: 0.75,
            repeat: 5,
            repeatType: "loop",
            // repeatDelay: 0.5,
            duration: 0.25,
            ease: "easeInOut",
          }}
          src={contactImg}
          alt=""
          className="contact-heading-img"
        />
        <h2 className="contact-heading">Contact Us</h2>
      </div>
      <div className="contact-content-container">
        <div className="contact-content">
          <h2 className="contact-content-heading">Registered Office</h2>
          <p className="text-md font-ralewayRegular my-3 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-[400px] h-[100px]">
          <ContactForm />
        </div>
      </div>
      <Locations />
    </section>
  );
};

export default ContactUs;
