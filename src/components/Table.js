// Importing Fragment from React
import { Fragment } from 'react';

// Table component
function Table({ data, config, keyFn }) {
  // Rendering table headers
  const renderedHeaders = config.map((column) => {
    // If header function is provided in column configuration, call it
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    // Otherwise, render a default header
    return <th key={column.label}>{column.label}</th>;
  });

  // Rendering table rows
  const renderedRows = data.map((rowData) => {
    // Rendering cells for each row
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    // Returning a row with its cells
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  // Return the table component
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

// Exporting the Table component as default
export default Table;
