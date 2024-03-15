import { useState } from 'react'; // Importing useState hook from React
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'; // Importing Chevron icons from react-icons library

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1); // State for tracking expanded index

  const handleClick = (nextIndex) => { // Function to handle click events
    setExpandedIndex((currentExpandedIndex) => { // Updating expanded index state
      if (currentExpandedIndex === nextIndex) { // If clicked on already expanded item, collapse it
        return -1;
      } else { // If clicked on a different item, expand it
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => { // Mapping through items to render each accordion item
    const isExpanded = index === expandedIndex; // Checking if the item is expanded

    const icon = ( // Chevron icon based on expansion state
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}> {/* Unique key for each accordion item */}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)} // Click handler for expanding/collapsing
        >
          {item.label} {/* Accordion item label */}
          {icon} {/* Chevron icon */}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>} {/* Render content if expanded */}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>; {/* Rendered accordion items container */}
}

export default Accordion; // Exporting Accordion component as default
