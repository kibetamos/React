/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

//   function logoImage(){
//     return (
//         <img src="/pex.jpg" alt="Logo" />
//     );
// }

// function Navbar(){
//     return (
//         <div>
//             <img src="./react-logo.png" width="80px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on GitHub</li>
//                 <li>Maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps</li>
//             </ul>
//         </div>
//     );
// }


// console.log(Navbar)
// ReactDOM.render(
//     <div>
//         <logoImage />
//         <Navbar />
//     </div>,
//     document.getElementById("root")
// )


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page(){
    return(
        <div>
            <h1>I love React, Why ...</h1>
            <ul>
                <li>Popularity </li>
                <li>Declarative Syntax </li>
                <li>Virtual DOM </li>
                <li>Ecosystem</li>
                <li>Backed by Facebook</li>
                <li>Learning Opportunities</li>
            </ul>
            {/* <p>This is my page</p> */}
        </div>
    )
}

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */


ReactDOM.render(<Page />, document.getElementById("root"))