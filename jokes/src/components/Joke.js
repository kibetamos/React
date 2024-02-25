import React from "react";


export default function Joke(props){
    console.log(props)
    return(
        <div>
        {props.setup && <h3>Setup: {props.setup}</h3>}
        <p>{props.punchline}</p>
        <hr />
    </div>

    )
}