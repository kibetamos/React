import React from "react";
import App from "./App";


export default function Car(props){


    return(
        <ul>

            {props.cars.map((magari) =>{

                return magari.endsWith("o") ? <li>{magari}</li> : null;
            })}

        </ul>
    )
}