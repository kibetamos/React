import React from 'react'
import App from './App';


export default function List(props){

    return(
        <ul>
           {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
        </ul>
    )
}