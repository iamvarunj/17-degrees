import React from "react";
import { ContactForm } from "../../components";
import "./Contact.scss";
import { contactMap, landingImg, location } from "../../assets/img";

const Contact = () => {
  return (
    <section className="w-full h-full bg-white py-5">
      <div className="max-w-screen-2xl w-full h-full flex justify-center gap-x-10">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex gap-x-2">
            <h1 className="text-7xl  font-saveurLight font-[200] text-primary-pink">
              Lets
            </h1>
            <h1 className="text-7xl pt-6 font-saveurLight font-[200] text-primary-pink">
              Meet
            </h1>
          </div>
          <div className="h-full flex flex-col justify-evenly">
            <div className="flex flex-col gap-y-1 font-ralewayRegular">
              <h2 className="uppercase font-bold text-lg font-ralewayRegular">
                Dhanbad
              </h2>
              <p className="font-ralewayRegular">
                Seventeen Degrees Hotel Co Pvt Ltd <br />
                Sriram Mall, Ashok Nagar,
                <br />
                Dhanbad - 828106. <br />
                Phone: 91-326-2303869, 0326-3511123 <br />
                Mobile: +91-9234669208, +91-9234669201{" "}
              </p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h2 className="font-bold text-lg font-ralewayRegular">
                Contact Person
              </h2>
              <p className="font-ralewayRegular">
                Santosh Prasad - 9234669201 <br /> E-mail:
                17degreeshotel@gmail.com <br /> reservation@17degresshotel.com
              </p>
            </div>
            <div className="flex flex-col gap-y-1 font-ralewayRegular">
              <h2 className="uppercase font-bold text-lg font-ralewayRegular">
                Patna
              </h2>
              <p className="font-ralewayRegular">
                th Floor, P & M Mall, <br />
                Patliputra Industrial Area, <br />
                Khurji Road
                <br />
                Patna - 800013. <br />
              </p>
            </div>
            <div className="flex flex-col gap-y-1 font-ralewayRegular">
              <h2 className="font-bold text-lg font-ralewayRegular">
                Contact Person
              </h2>
              <p className=" font-ralewayRegular">
                Ashok Kumar Tarun - 9234669202 <br />
                Rajeev Ranjan - 9204851717 <br /> E-mail: 17degreesptn@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" flex flex-col justify-start gap-y-5">
          <div className="size-[350px]">
            <img src={contactMap} alt="" className="size-full" />
          </div>
          <h2 className="font-bold text-lg font-ralewayRegular">Locations</h2>
          <div className="w-[50px] flex gap-x-2">
            <img src={location} alt="" className="size-full" />
            <img src={location} alt="" className="size-full" />
          </div>
          <form action="" className="w-full h-full py-2">
            <div className="flex flex-col pb-4">
              <label htmlFor="Name" className="font-ralewayRegular">
                Name
              </label>
              <input
                type="text"
                className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col  pb-4">
              <label htmlFor="Name" className="font-ralewayRegular">
                Mobile No
              </label>
              <input
                type="mobile"
                className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="Name" className="font-ralewayRegular">
                Email id
              </label>
              <input
                type="text"
                className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col pb-4">
              <label htmlFor="Name" className="font-ralewayRegular">
                Remarks
              </label>
              <input
                type="text"
                className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
              />
            </div>
          </form>
          {/* <div className="py-10">
            <ContactForm />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
