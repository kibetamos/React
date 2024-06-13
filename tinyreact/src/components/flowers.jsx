import React from 'react';

export default function Flower(){

    const flowers = ['Rose', 'Lily', 'Daisy', 'Azalea'];

    return(
        <div>
            {flowers.map((flow) => (
                <li key={flow}>
                   <p>{flow}</p> 
                </li>
           ))}
        </div>
    )
}     