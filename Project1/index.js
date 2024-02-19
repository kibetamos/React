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

function Navbar(){
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps</li>
            </ul>
        </div>
    );
}


console.log(Navbar)
ReactDOM.render(
    <div>
        <Navbar />
    </div>,
    document.getElementById("root")
)