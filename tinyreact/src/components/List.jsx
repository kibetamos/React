import React from 'react'
import App from './App';


export default function List(props){

  if(!props.animals){
    // If the props.animals array is not defined or null, return a loading message.
    return <div>Loading ...</div>;
  }

  if(props.animals.length === 0){
    // If the props.animals array is defined but empty, return a message indicating that there are no animals in the list.
    return<div>There are noanimals in the list</div>;
  }

    return(
      <ul>
{/* we are usig the map array to iterate over each element of the props.animals */}
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