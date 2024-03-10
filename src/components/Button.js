import className from "classnames";
import { twMerge } from "tailwind-merge";

// Define the Button component
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  // Merge Tailwind CSS classes based on component props
  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    })
  );

  // Render the button with merged classes and remaining props
  return <button {...rest} className={classes}>{children}</button>;
}

// Define propTypes for Button component
Button.propTypes = {
  // Custom validation for ensuring only one variation is true
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    // Check if more than one variation is true, throw error if so
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

// Export the Button component as default
export default Button;
