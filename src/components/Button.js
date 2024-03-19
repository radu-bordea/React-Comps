import className from 'classnames'; // Importing classNames library for conditional class assignment

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
  // Constructing classes based on props
  const classes = className(
    rest.className, // Any additional classes passed
    'flex items-center px-3 py-1.5 border', // Base button styles
    {
      // Conditional classes based on props
      'border-blue-500 bg-blue-500 text-white': primary && !outline,
      'border-gray-900 bg-gray-900 text-white': secondary && !outline,
      'border-green-500 bg-green-500 text-white': success && !outline,
      'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
      'border-red-500 bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );
  
  // Returning button component with constructed classes
  return (
    <button {...rest} className={classes}>
      {children} {/* Button text or children */}
    </button>
  );
}

// PropType validation for ensuring only one variation is true
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button; // Exporting Button component as default