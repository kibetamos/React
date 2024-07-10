import React from "react";

// Define the Clock component
export default function Clock() {
  // Initialize state: counter starts at 0
  const [counter, setCounter] = React.useState(0);

  // Set up an interval to update the counter every second (1000 milliseconds)
  React.useEffect(() => {
    setInterval(() => {
      // Update the counter state, incrementing the current count by 1
      setCounter(count => count + 1);
    }, 1000);

  }, [])// Empty dependency array means this 
  //effect runs only once after the initial render

  // Render the component
  return (
    <div>
      <p>{counter} seconds have passed.</p>
    </div>
  );
}



  // React.useEffect(() => {
  //   setInterval(() => {
  //     setCounter(count => count + 1)
  //   }, 1000);
  // }, [])