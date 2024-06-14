import React from "react";
import App from "./App";

export default function Teams(props){

    return(
        <div>
            {props.teams.map((team) =>{
                return team.startsWith("M") ? <li>{team}</li> : null;
            })}
        </div>
    )


}