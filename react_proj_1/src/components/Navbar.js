/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

// import logo from './logo.svg';
// /home/amos/projects/React/react_proj_1/src/logo.svg
import React from "react"

export default function Navbar() {
    return (
        <nav>
            
            <img src="./images/react-logo.png" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}