// Importing necessary modules
import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

// SortableTable component
function SortableTable(props) {
  // Destructure props
  const { config, data } = props;
  
  // Destructure properties from useSort hook
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  // Update the config with sorting functionality
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Function to get sorting icons
  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy || sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  }

  // Render the Table component with sorted data and updated config
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

// Exporting the SortableTable component as default
export default SortableTable;
