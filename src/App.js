import Dropdown from "./components/Dropdown";

// Define the main App component
function App() {
  const options = [
    { label: "Red", value: 'red' },
    { label: "Green", value: 'green' },
    { label: "Blue", value: 'blue' },
  ];

  return <Dropdown options={options}/>;
}

// Export the App component as default
export default App;
