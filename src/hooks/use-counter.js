import { useState, useEffect } from "react";

// Custom hook for a simple counter
function useCounter(initialCount) {
  // State for count
  const [count, setCount] = useState(initialCount);

  // Effect to log count on every count change
  useEffect(() => {
    console.log(count);
  }, [count]);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Return count and increment function
  return {
    count,
    increment,
  };
}

export default useCounter;
