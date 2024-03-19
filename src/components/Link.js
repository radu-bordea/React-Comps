// Importing necessary modules
import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

// Link component
function Link({ to, children, className, activeClassName }) {
  // Using navigation hook to get navigation functions and current path
  const { navigate, currentPath } = useNavigation();

  // Generating dynamic classes based on current path and provided class names
  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  // Function to handle link click
  const handleClick = (event) => {
    // Preventing default behavior for navigation within the app
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    // Navigating to the provided path
    navigate(to);
  };

  // Return the link component
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

// Exporting the Link component as default
export default Link;
