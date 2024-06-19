import React, { useState } from 'react';

// Define the Counter functional component
export default function Counter() {
  
  // Declare a state variable 'count' and a function 'setCount' to update it
  // Initialize 'count' to 0
  const [count, setCount] = useState(0);

  // Return the JSX to render the component
  return (
    <div>
      {/* Display the current value of count */}
      <p>Count: {count}</p>
      
      {/* Button to increment the count when clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
