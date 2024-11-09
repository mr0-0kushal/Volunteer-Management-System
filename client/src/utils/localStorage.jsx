import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Retrieve the item from localStorage if it exists, or use the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        // Check if the item looks like a JSON object
        try {
          return JSON.parse(item);
        } catch (error) {
          // If JSON parsing fails, assume it's a string and return it as is
          return item;
        }
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      // Check if the value is a string, and only stringify if necessary
      const valueToStore = typeof storedValue === "object" ? JSON.stringify(storedValue) : storedValue;
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
