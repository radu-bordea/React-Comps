// Import necessary dependencies and components
import { useState } from "react";
import Dropdown from "../components/Dropdown";

// Define the main App component
function DropdownPage() {
  // State to manage selected option
  const [selection, setSelection] = useState(null);

  // Function to handle option selection
  const handleSelect = (option) => {
    setSelection(option);
  };

  // Define available options
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  // Return the DropdownPage component
  return (
    <div className="flex">
      {/* Render Dropdown component with options and selection handler */}
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

// Export the DropdownPage component as default
export default DropdownPage;
