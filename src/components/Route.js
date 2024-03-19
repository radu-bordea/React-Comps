// Importing necessary module
import useNavigation from '../hooks/use-navigation';

// Route component
function Route({ path, children }) {
  // Using navigation hook to get current path
  const { currentPath } = useNavigation();

  // Rendering children if path matches current path
  if (path === currentPath) {
    return children;
  }

  // Return null if path doesn't match
  return null;
}

// Exporting the Route component as default
export default Route;
