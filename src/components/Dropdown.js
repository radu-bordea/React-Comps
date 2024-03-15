import { useState, useEffect, useRef } from 'react'; // Importing necessary hooks from React
import { GoChevronDown } from 'react-icons/go'; // Importing ChevronDown icon from react-icons library
import Panel from './Panel'; // Importing Panel component

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false); // State for tracking dropdown open/close
  const divEl = useRef(); // Reference to the dropdown container element

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) { // If the dropdown container doesn't exist
        return;
      }

      if (!divEl.current.contains(event.target)) { // If clicked outside the dropdown container
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener('click', handler, true); // Adding event listener to handle outside clicks

    return () => {
      document.removeEventListener('click', handler); // Cleanup: removing event listener
    };
  }, []); // Runs only once on component mount

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown open/close
  };

  const handleOptionClick = (option) => {
    setIsOpen(false); // Close dropdown on option selection
    onChange(option); // Call the onChange function with the selected option
  };

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

  return (
    <div ref={divEl} className="w-48 relative"> {/* Dropdown container */}
      <Panel
        className="flex justify-between items-center cursor-pointer" // Panel for dropdown header
        onClick={handleClick} // Toggle dropdown open/close on header click
      >
        {value?.label || 'Select...'} {/* Display selected value or default */}
        <GoChevronDown className="text-lg" /> {/* ChevronDown icon */}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>} {/* Render options if dropdown is open */}
    </div>
  );
}

export default Dropdown; // Exporting Dropdown component as default
