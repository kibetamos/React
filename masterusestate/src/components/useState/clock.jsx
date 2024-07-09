import React from "react";

export default function Clock() {

  const[counter, setCounter] = React.useState(0);

  React.  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  }, [])

  return (
    <div>
      <p>{counter} seconds have passed.</p>
    </div>
  )
}
