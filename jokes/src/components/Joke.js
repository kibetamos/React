import React from "react";


export default function Joke(props){
    console.log(props)
    return(
        <div>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        <hr />
    </div>

    )
}