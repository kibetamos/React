import React from 'react';
import App from './App';



export default function Flower(props){
    if(!props.flowers){
        return<h1>LOading ...</h1>;
    }

    if (props.flowers.length === 0 ){
        return<h1>There are no flowers here</h1>;
    }

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

            return flower.startsWith("A") ? <li key={flower}>{flower}</li> : null;
            // lower.sta<li key={flower}>{flower}</li>

            // return an.startsWith("L") ? <li key={an}>{an}</li> : null;


            })}
        </div>
    );
}     
