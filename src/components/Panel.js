import classNames from 'classnames'; // Importing classNames library for conditional class assignment

function Panel({ children, className, ...rest }) {
  // Combining default and custom classNames
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full', // Default classNames for panel
    className // Custom classNames passed as props
  );

  // Returning a div element with combined classNames and children
  return (
    <div {...rest} className={finalClassNames}>
      {children} {/* Children elements */}
    </div>
  );
}

export default Panel; // Exporting Panel component as default
