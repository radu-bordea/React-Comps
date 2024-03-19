// Importing necessary modules
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

// Dropdown component
function Dropdown({ options, value, onChange }) {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  // Effect to handle click outside dropdown
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  // Function to handle dropdown toggle
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  // Rendering dropdown options
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

  // Return the dropdown component
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

// Exporting the Dropdown component as default
export default Dropdown;
