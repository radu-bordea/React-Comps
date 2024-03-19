// Importing necessary hook and context
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

// Custom hook for accessing navigation context
function useNavigation() {
  // Using useContext hook to get the navigation context
  return useContext(NavigationContext);
}

// Exporting the useNavigation hook as default
export default useNavigation;
