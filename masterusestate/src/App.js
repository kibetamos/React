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


// CHALLENGE 2 
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */

    const [count, setCount] = React.useState(0)
    console.log(count)

    function add(){

        // console.log('add')
        setCount(count + 1)

    }

    function minus(){

        setCount(count - 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}