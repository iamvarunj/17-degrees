import React from "react";

const ContactForm = () => {
  return (
    <form action="" className="w-full h-full py-2">
      <div className="flex flex-col pb-4">
        <label htmlFor="Name" className="font-ralewayRegular">
          <p>Name</p>
        </label>
        <input
          type="text"
          className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
        />
      </div>
      <div className="flex flex-col  pb-4">
        <label htmlFor="Name" className="font-ralewayRegular">
          <p>Mobile No</p>
        </label>
        <input
          type="mobile"
          className="border-b-[1.5px] border-b-primary-pink outline-none bg-transparent"
        />
      </div>
      <div className="flex flex-col pb-4">
        <label htmlFor="Name" className="font-ralewayRegular">
          <p>Email id</p>
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
  );
};

export default ContactForm;
