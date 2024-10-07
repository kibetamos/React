// // import React from "react"

// // export default function App() {
// //   // const state = "Yes"
// // //   lets do array destructuirng
// //   const [isImportant, setIsImportant] = React.useState("Yes")
// // //   setIsImportant("Noe")

// // /**
// //      * Challenge: 
// //      * 1. Create a function called `handleClick` that runs
// //      *    setIsImportant("No")
// //      * 2. add a click event listener to the div.state--value
// //      *    that runs `handleClick` when the div is clicked.
// //      */
// //  function handleClick(){
// //     setIsImportant("No") 
// //  }
// // //   console.log(result) 
// //     return (
// //         <div className="state">

// //             <h1 className="state--title">Is state important to know?</h1>
// //             <div className="state--value" onClick={handleClick}>
// //                 <h1>{isImportant}</h1>
// //             </div>
// //         </div>
// //     )
// // }


// // CHALLENGE 2 
//     /**
//      * Challenge: 
//      * See if you can think of a way to add 1 to the count
//      * every time the + button is clicked
//      */

//     // const [count, setCount] = React.useState(0)
//     // console.log(count)

//     // function add(){

//         // console.log('add')
//         // setCount(count + 1)

//         /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. 
//      * This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */
// //         setCount(prevCount => prevCount + 1)

// //     }

// //     // Challenge: update `substract` to use a callback function

// //     function minus(){

// //         // setCount(count - 1)
// //         // Adding callback function

// //         setCount(prevCount => prevCount -1)
// //     }

// //     return (
// //         <div className="counter">
// //             <button className="counter--minus" onClick={minus}>–</button>
// //             <div className="counter--count">
// //                 <h1>{count}</h1>
// //             </div>
// //             <button className="counter--plus" onClick={add}>+</button>
// //         </div>
// //     )
// // }

// // CHALLENGE 3


// // import React from "react"

// // export default function App() {
// //     /**
// //      * Challenge: Replace the if/else below with a ternary
// //      * to determine the text that should display on the page
// //      */

// //     // Another example


// //      /**
// //      * Challenge: move our ternary directly inside of the JSX
// //      * so the "Yes" and "No" are determined inside the <h1>
// //      * 
// //      * Hint: you will no longer need the `answer` variable
// //      */


// //     const isBuyingLand = true
// //     // let vote = isBuyingLand ? 'Buying Land': 'Not Buying'; 

// //     const isGoingOut = false
    
// //     // let answer  = isGoingOut ? 'Yes' : 'No';// Use ternary here
// //     // if(isGoingOut === true) {
// //     //     answer = "Yes"
// //     // } else {
// //     //     answer = "No"
// //     // }
// //     return (
// //         <div className="state">
// //             <h1 className="state--title">Do I feel like going out tonight?</h1>
// //             <div className="state--value">
// //                 {/* <h1>{isGoingOut ? 'Yes' : 'No'}</h1> */}
// //                 <h1>{isBuyingLand ? 'Buy': 'NotBu'}</h1>
// //             </div>
// //             <div className="state--value-1">
// //                 <h1>{isGoingOut ? 'Yes' : 'No'}</h1>

// //                 {/* <h1>{isBuyingLand ? 'Buy': 'NotBu'}</h1> */}

// //             </div>
// //         </div>
// //     )
// // }


// //CHALLENGE 4

// // import React from "react"

// // export default function App() {
// //     /**
// //      * Challenge: 
// //      * - Initialize state for `isGoingOut` as a boolean
// //      * - Make it so clicking the div.state--value flips that
// //      *   boolean value (true -> false, false -> true)
// //      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
// //      */

// //     const [isGoingOut, setIsGoingOut] = React.useState(true)
    
// //     // const isGoingOut = false
// //     function changeMind(){
// //         setIsGoingOut(prevState => !prevState)
// //     }
// //     return (
// //         <div className="state">
// //             <h1 className="state--title">Do I feel like going out tonight?</h1>
// //             <button className="state--value" onClick={changeMind}>
// //                 {isGoingOut ? 'Yes' : 'No'}
// //             </button>
// //         </div>
// //     )
// // }


// // COMPLEX ARRAYS

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // // imports

// // export default function App(){
// //     /**
// //      * Challenge: Convert the code below to use an array
// //      * held in state instead of a local variable. Initialize 
// //      * the state array with the same 2 items below
// //      * 
// //      * Don't worry about fixing `addItem` quite yet.
// //      */
// //     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
// //     function addItem() {
// //         // We'll work on this next
// //         // const newThingText = `Thing ${thingsArray.length + 1}`
// //         // thingsArray.push(newThingText)
// //         // document.getElementById()
// //         // console.log(thingsArray)
        
// //         setThingsArray(prevState => {
// //             return [...prevState, `Thing ${prevState.length + 1}`]
// //         })
// //     }
// //     //     setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
// //     // }
// //     // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
// //     const thingsElements = thingsArray.map(things => <p key= {things}>{things}</p>)
// //     return (
// //         <div>
// //             <button onClick={addItem}>Add Item</button>
// //             {thingsElements}
// //         </div>
// //     )
// // }

// // ReactDOM.render(<App />, document.getElementById('root'));

// // //create a state
// // const [things, setThings] = React.useState(['T1','T2'])

// // function add(){
// //     setThings(prevthings => [...prevthings, `T ${prevthings.length + 1 }`])
// // }
// // // ...prevState, `Thing ${prevState.length + 1}`]
// // const thingsElements = thingsArray.map(things => <p key= {things}>{things}</p>)
// // return (
// //     {setThings}
// // )


// //  setThingsArray(prevState => {
// //             return [...prevState, `Thing ${prevState.length + 1}`]
// //         })


// // Challenge when complex state is an object

// import React from "react"
// import Star from './Star'
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
//     /**
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */
//         /**
//      * Challenge: Use a ternary to determine which star image filename
//      * should be used based on the `contact.isFavorite` property
//      * 
//      * `true` => "star-filled.png"
//      * `false` => "star-empty.png"
//      */


//         /**
//      * Challenge: Move the star image into its own component (Star)
//      * - It should receive a prop called `isFilled` that it
//      *   uses to determine which icon it will display
//      * - Import and render that component, passing the value of
//      *   `isFavorite` to the new `isFilled` prop.
//      * - Don't worry about the abiliity to flip this value quite yet.
//      *   Instead, you can test if it's working by manually changing
//      *   `isFavorite` in state above.
//      */
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     // function toggleFavorite() {
//     //     console.log("Toggle Favorite")
//     // }
    
//     function toggleFavorite() {
//         setContact(prevContact => {
//             return{...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//         console.log("Toggle Favorite")
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     {/* <Star /> */}

//                     <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }

import './App.css';
// import Form from './Form';
// import Challenge1 from './Challenge1';
// import Task from './Task';
// import Form from './Forms';
// import Student from './student';
// import Add from './add';
// import Colour from './Colour';
// import Person from './Person';
// Person
import Clock from './components/useState/clock';
import Task from './components/classComponents/Task';

import Form from './components/classComponents/Student';
import Student from './components/classComponents/Student';
import Card from './components/classComponents/Card';

export default function App() {
  
  return (
    <div className="App-header">
          {/* <Challenge1/>    */}
          {/* <Task /> */}
          {/* <Form /> */}
          {/* < Student /> */}
          {/* <Add /> */}
          {/* < Colour /> */}
          {/* < Person /> */}
          {/* < Clock /> */}
          <Task />
          {/* <Student /> */}
          {/* <Card /> */}
          
    </div>
  );
}




