import React from "react"
import Joke from "./components/Joke";
import './style.css';

function App() {
    return (
        <div className="jokes">
             <Joke />

             <Joke 
             setup = "Why don't pirates travel on mountain roads?"
             punchline="Scurvy" 
             />
            
        </div>
    )
}

export default App