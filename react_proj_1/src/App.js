import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './index.css';

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}