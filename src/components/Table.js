function Table({ data, config }) {
  const renderHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    const renderCels = config.map((column) => {
      return <td className="p-2" key={column.label}>{column.render(fruit)}</td>;
    });

    return (
      <tr className="border-b" key={fruit.name}>
        {renderCels}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
