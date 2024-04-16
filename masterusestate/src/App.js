// import React from "react"

// export default function App() {
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

    // const [count, setCount] = React.useState(0)
    // console.log(count)

    // function add(){

        // console.log('add')
        // setCount(count + 1)

        /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. 
     * This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
//         setCount(prevCount => prevCount + 1)

//     }

//     // Challenge: update `substract` to use a callback function

//     function minus(){

//         // setCount(count - 1)
//         // Adding callback function

//         setCount(prevCount => prevCount -1)
//     }

//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={minus}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

// CHALLENGE 3


import React from "react"

export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */

    // Another example


     /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */


    const isBuyingLand = true
    // let vote = isBuyingLand ? 'Buying Land': 'Not Buying'; 

    const isGoingOut = false
    
    // let answer  = isGoingOut ? 'Yes' : 'No';// Use ternary here
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                {/* <h1>{isGoingOut ? 'Yes' : 'No'}</h1> */}
                <h1>{isBuyingLand ? 'Buy': 'NotBu'}</h1>
            </div>
            <div className="state--value-1">
                <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
                {/* <h1>{isBuyingLand ? 'Buy': 'NotBu'}</h1> */}
            </div>
        </div>
    )
}
