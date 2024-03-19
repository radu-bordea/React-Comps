// Importing necessary components
import SortableTable from '../components/SortableTable';

// Component representing the Table page
function TablePage() {
  // Sample data for the table
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
  ];

  // Configuration for the table columns
  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: 'Score Squared',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  // Function to extract key from data
  const keyFn = (fruit) => {
    return fruit.name;
  };

  // Rendering the SortableTable component with provided data, configuration, and key function
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

// Exporting the TablePage component as default
export default TablePage;
