import React from "react"
import boxes from "./boxes"
// style.css
import './style.css';
import Box from "./Box";

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


      /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

      
    const [squares, setSquares] = React.useState(boxes)
    // const styles = {
    //   backgroundColor: props.darkMode ? "#222222" : "#333333"
    // }
    const squareElements = squares.map(square => (

      <Box className="box" key={square.id} on={square.on}/>
    ))

    // console.log(boxes)
    return (
       <main>
            {squareElements}
        </main>
    )
}
