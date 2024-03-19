// Importing necessary hooks and components
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

// Component representing the Dropdown page
function DropdownPage() {
  // State to manage the selected option
  const [selection, setSelection] = useState(null);

  // Function to handle selection change
  const handleSelect = (option) => {
    setSelection(option);
  };

  // Options for the dropdown
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  // Rendering the Dropdown component with provided options and handling selection change
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

// Exporting the DropdownPage component as default
export default DropdownPage;
