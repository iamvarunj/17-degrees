import React from "react";

const DinningNavbar = ({ sections, activeIndex, handleButtonClick }) => {
  return (
    <div className="flex items-center justify-between py-2 px-4 md:px-10 ">
        <span className="hidden md:block size-[10px] rounded-full bg-primary-pink" />
        <span className="hidden md:block w-[50px] h-[2px] bg-primary-pink" />
        <div className="hidden w-full h-[50px] bg-primary-blue rounded-full 
        md:flex items-center justify-around border-[1.5px] border-primary-pink px-5">
          {sections.map((section, index) => (
            <>
              {index ? (
                <span className="w-[10px] h-[10px] rounded-full bg-primary-pink" />
              ) : (
                ""
              )}
              <button
                key={index}
                className={`uppercase ${
                  activeIndex === index ? "text-primary-pink" : ""
                }`}
                onClick={() => handleButtonClick(index)}
                aria-label={`Navigate to ${section.label}`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                {section.label}
              </button>
            </>
          ))}
        </div>
        <span className="hidden md:block w-[50px] h-[2px] bg-primary-pink" />
        <span className="hidden md:block size-[10px] rounded-full bg-primary-pink" />
      </div>
  );
};

export default DinningNavbar;
