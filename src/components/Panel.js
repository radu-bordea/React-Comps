// Import necessary dependency
import classNames from "classnames";

// Define Panel component
function Panel({ children, className, ...rest }) {
  // Concatenate classNames with provided className prop
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  // Return the Panel component
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

// Export the Panel component
export default Panel;
