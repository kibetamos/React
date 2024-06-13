import React from 'react';
import App from './App';



export default function Flower(props){

    // const flowers = ['Rose', 'Lily', 'Daisy', 'Azalea'];
// console.log(props.flowers)
    return(
        <div>
            {/* {flowers.map((flow) => (
                <li key={flow}>
                   <p>{flow}</p> 
                </li>
           ))} */}

           {props.flowers.map((flow) => (
            <li key={flow}>{flow}</li>
           ))}
        </div>
    );
}     