/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

// import logo from './logo.svg';
// /home/amos/projects/React/react_proj_1/src/logo.svg
import React from "react"


export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "Dark": ""}>
            
            <img 
            src="./images/react-icon-small.png" 
            className="nav--icon" 
            />
     {/* /images/react-logo.png */}
            <h3 className="nav--logo_text">ReactProjects</h3>
            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>

                <div
                
                className="toggler--slider"
                onClick={props.toggleDarkMode}
                >

                    <div className="toggler--slider--circle"></div>
</div>
                    <p className="toggler--dark">Dark</p>

                

            </div>
            {/* <h4 className="nav--title">React Course - Project 1</h4> */}
        </nav>
    )
}