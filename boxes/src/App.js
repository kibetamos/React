import React from "react"
import boxes from "./boxes"
import Box from "./Box"
// style.css
import './style.css';
// import Box from "./Box";

export default function App() {
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


      // CHALLENGE 3 
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
 
    const [squares, setSquares] = React.useState(boxes)
    // const styles = {
    //   backgroundColor: props.darkMode ? "#222222" : "#333333"
    // }
    function toggle (id){
/**
 * Challenge: use setSquares to update the
 * correct square in the array.
 * 
 * Make sure not to directly modify state!
 * 
 * Hint: look back at the lesson on updating arrays
 * in state if you need a reminder on how to do this
 */

// declarative
// solution 1
      // setSquares(prevSquares => { // Use the functional form of setSquares to update state based on previous state
      //   const newSquares = []  // Initialize an empty array to hold the updated squares
      //   for(let i = 0; i < prevSquares.length; i++) { // Iterate through each square in the previous state
      //       const currentSquare = prevSquares[i] // Retrieve the current square being processed
      //       if(currentSquare.id === id) { // Check if the id of the current square matches the id passed to the function
      //           const updatedSquare = { // If the id matches, create an updated version of the current square
      //               ...currentSquare, // Spread operator to copy properties of currentSquare
      //               on: !currentSquare.on // Toggle the 'on' property of the square
    
      //           }
      //           newSquares.push(updatedSquare) // Push the updated square to the newSquares array
      //       } else {
      //           newSquares.push(currentSquare)// If the id doesn't match, push the unchanged current square
      //       }

      //   }
      //   return newSquares // Return the array of updated squares, which becomes the new state
      // })

      // solution 2
// setSquares(prevSquares => {
//   return prevSquares.map((square) => {
//    return  square.id === id ? {...square,on:!square.on} : square
//   })
// }

// )
setSquares(prevtriangles => {
  return prevtriangles.map((square) =>{// Map over the previous squares array
    return square.id === id ? {...squares, on:!square.on}: square
  } )
}

)

}

const squareElements = squares.map(square => (
  <Box 
      key={square.id} 
      id={square.id}
      on={square.on} 
      toggle={toggle}
  />
))
    // console.log(boxes)
    return (
      <main>
          {squareElements}
      </main>
  )
}