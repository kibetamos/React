import React from "react";



export default function Person(){
    const[person, setPerson] = React.useState({
        name:"Doe",
        age:55
    });

    const handleIncreaseAge = () => {
        setPerson(prevP => ({
            ...prevP,
            age: prevP.age + 1
        }));
    };

    return(
        
        
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </div>
    )
}