import { useState } from 'react'; // Importing useState hook from React
import Dropdown from '../components/Dropdown'; // Importing Dropdown component

function DropdownPage() {
  const [selection, setSelection] = useState(null); // State for tracking dropdown selection

  // Function to handle dropdown selection
  const handleSelect = (option) => {
    setSelection(option); // Updating selection state with the selected option
  };

  // Dropdown options
  const options = [
    { label: 'Red', value: 'red' }, // Option 1
    { label: 'Green', value: 'green' }, // Option 2
    { label: 'Blue', value: 'blue' }, // Option 3
  ];

  // Rendering Dropdown component with options and selection handler
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} /> {/* Rendering Dropdown component */}
    </div>
  );
}

export default DropdownPage; // Exporting DropdownPage component as default
