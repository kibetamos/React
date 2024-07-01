import React from "react";



export default function Person(){
    const[person, setPerson] = React.useState({
        name:"Amos",
        age:5
    });

function handleIncreaseAge(){

}

    return(
        
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </div>
    )
}