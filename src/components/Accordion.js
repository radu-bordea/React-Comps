// Importing necessary modules
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

// Accordion component
function Accordion({ items }) {
  // State to manage expanded index
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Function to handle click on accordion item
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  // Rendering accordion items
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // Icon based on accordion state
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        {/* Accordion item */}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* Render content if expanded */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  // Return the accordion component
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

// Exporting the Accordion component as default
export default Accordion;
