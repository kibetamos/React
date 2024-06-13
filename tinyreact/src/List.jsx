import React from 'react'
import App from './App';


export default function List(props){

    return(
      <ul>

        {props.animals.map((animal) =>{
          return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        })}
      </ul>
      //   <ul>
      //      {props.animals.map((animal) => {
      //   return <ListItem key={animal} animal={animal} />;
      // })}
      //   </ul>
      // <div>
      // <p>Name: {props.name}</p>
      // <p>Age: {props.age}</p>
      // <p>Student : {props.isStudent ? "Yes" : "No" }</p>
      // </div>
    );
}