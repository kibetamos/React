import React from "react"
import Navbar from "./components/Navbar"
import './index.css';
import Hero from "./components/Hero";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
          <Navbar />
          <Hero />
        </div>
    )
}