/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <header>
        <nav className="nav">
            {/* <img src="../../images/logo512.png" className="nav-logo" alt="Logo"/> */}
            <img src="../images/logo512.png" />
                <ul className= "nav-items">
                    <li>React Course - Project one</li>
                    {/* <li>About</li>
                    <li>Contact</li> */}
                </ul>
            </nav>
            </header>
    )
}


function Header() {
    return (
        <header>
            
        </header>
    )
}