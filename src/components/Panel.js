// Importing necessary module
import classNames from 'classnames';

// Panel component
function Panel({ children, className, ...rest }) {
  // Generating final classNames based on provided classNames
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  // Return the panel component
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

// Exporting the Panel component as default
export default Panel;
