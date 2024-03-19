// Importing necessary modules
import { createContext, useState, useEffect } from 'react';

// Creating navigation context
const NavigationContext = createContext();

// Provider component for navigation context
function NavigationProvider({ children }) {
  // State to track current path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Effect to update current path on popstate
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  // Function to navigate to a new path
  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  // Providing the navigation context value to children
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Exporting the NavigationProvider and NavigationContext
export { NavigationProvider };
export default NavigationContext;
