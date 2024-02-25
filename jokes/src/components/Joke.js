import React from "react";


export default function Joke(props){
    console.log(props)
    return(
        <di>
           {props.setup}
           {props.punchline}
        </di>
    )
}