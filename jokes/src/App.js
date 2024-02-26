import React from "react"
import Joke from "./components/Joke";
import './style.css';
import jokesData from "./jokesData";
/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

// const capitalized = names.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)
// })


/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
           {jokeElements} 
        </div>
        
    )
}