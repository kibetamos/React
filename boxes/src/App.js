import React from "react"
import boxes from "./boxes"
// style.css
import './style.css';

export default function App(props) {
  // props.darkMode


      // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to #222222
    // If darkMode is false, set it to #cccccc

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    const [squares, setSquares] = React.useState(boxes)
    const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#333333"
    }
    const squareElements = squares.map(square => (

      <div style= {styles} className="box" key={square.id}></div>
    ))

    // console.log(boxes)
    return (
       <main>
            {squareElements}
        </main>
    )
}
