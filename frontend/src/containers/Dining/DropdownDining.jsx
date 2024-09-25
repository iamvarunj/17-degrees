import { useState } from 'react';

const DropdownMenu = ({ sections, activeIndex, handleButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSectionClick = (index) => {
    handleButtonClick(index);
    setIsOpen(false); // Close the dropdown on selection
  };

  return (
    <div className="relative md:hidden w-full px-4">
      <button 
        onClick={toggleDropdown}
        className="w-full h-[50px] bg-primary-blue rounded-full flex items-center justify-between px-5 border-[1.5px] border-primary-pink text-black"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="uppercase">{sections[activeIndex]?.label || "Menu"}</span>
        <span className="caret">&#9662;</span> {/* Caret symbol for dropdown indication */}
      </button>

      {isOpen && (
        <div className="absolute w-[90%] bg-primary-blue rounded-md shadow-lg mt-1 z-10">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`block w-full text-left px-4 py-3 uppercase ${
                activeIndex === index ? "text-primary-pink font-bold" : "text-black"
              } hover:text-primary-pink`}
              onClick={() => handleSectionClick(index)}
              aria-label={`Navigate to ${section.label}`}
              aria-current={activeIndex === index ? "true" : "false"}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
