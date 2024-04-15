import React from "react"

export default function App() {
//   // const state = "Yes"
// //   lets do array destructuirng
//   const [isImportant, setIsImportant] = React.useState("Yes")
// //   setIsImportant("Noe")

// /**
//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("No")
//      * 2. add a click event listener to the div.state--value
//      *    that runs `handleClick` when the div is clicked.
//      */
//  function handleClick(){
//     setIsImportant("No") 
//  }
// //   console.log(result) 
//     return (
//         <div className="state">

//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }



    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    return (
        <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>0</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
    )
}