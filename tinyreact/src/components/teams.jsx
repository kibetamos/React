import React from "react";
import App from "./App";

export default function Teams(props){

    if(!props.teams)
        return<li>LOading</li>

    if(props.teams.length === 0)
        return <li>The List is empty</li>

    return(
        <div>
            {props.teams.map((team) =>{
                return team.startsWith("M") ? <li>{team}</li> : null;
            })}
        </div>
    )


}