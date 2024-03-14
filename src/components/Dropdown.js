// Import necessary dependencies and components
import { useEffect, useState, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

// Define Dropdown component
function Dropdown({ options, value, onChange }) {
  // State to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Ref to track the dropdown element
  const divEl = useRef();

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // Function to toggle dropdown open/close state
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option) => {
    // Close the dropdown
    setIsOpen(false);
    // Call the onChange callback with the selected option
    onChange(option);
  };

  // Render the options
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // Return the Dropdown component
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* Display selected value or default text */}
        {value?.label || "Select..."}
        {/* Display appropriate icon based on dropdown state */}
        {isOpen ? <GoChevronLeft className="text-lg" /> : <GoChevronDown className="text-lg" />}
      </Panel>
      {/* Render options if dropdown is open */}
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

// Export the Dropdown component
export default Dropdown;
