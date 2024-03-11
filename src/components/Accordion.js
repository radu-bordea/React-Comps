// Import useState hook from React
import { useState } from "react";
// Import icons from react-icons library
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

// Define the Accordion component
function Accordion({ items }) {
  // State to track the index of the expanded item
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Function to handle click events on accordion items
  const handleClick = (nextIndex) => {
    // Update the expanded index state based on the next index
    setExpandedIndex((currentExpandedIndex) => {

      // Check if the clicked item is already expanded
      if (currentExpandedIndex === nextIndex) {
        // Collapse the item by setting the index to -1
        return -1;
      } else {
        // Expand the clicked item by setting the index to nextIndex
        return nextIndex;
      }
    });
  };

  // Render accordion items based on the provided data
  const renderItems = items.map((item, index) => {
    // Check if the current item is expanded
    const isExpanded = index === expandedIndex;

    // Determine the icon based on the expansion state
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    // Return the JSX for the accordion item
    return (
      <div key={item.id}>
        <div
          // Clickable header section of the accordion item
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label} {/* Display item label */}
          {icon} {/* Display icon indicating expansion state */}
        </div>
        {/* Expanded content of the accordion item */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  // Render the entire accordion component
  return <div className="border-x border-t rounded">{renderItems}</div>;
}

// Export the Accordion component as default
export default Accordion;
