// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'))

/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

// ReactDOM.render(

// <ul><li>we are </li> </ul>, 

// document.getElementById('root'))
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)


// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
// */

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>

// )

// console.log(navbar)

// ReactDOM.render(
//     navbar, 
//     document.getElementById('root')
// )
// import React from "react"
// import ReactDOM from "react-dom"


const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

// ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))

ReactDOM.render(
    page,
    document.getElementById("root")
)