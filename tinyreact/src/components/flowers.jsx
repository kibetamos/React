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

           {props.flowers.map((flower) => {

            return <li key={flower}>{flower}</li>
            })}
        </div>
    );
}     
