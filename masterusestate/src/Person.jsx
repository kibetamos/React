import React from "react";



export default function Person(){
    const[person, setPerson] = React.useState({
        name:"Amos",
        age:5
    });


    // const handleIncreaseAge = () => {
    //     // copy the existing person object into a new object
    //     // while updating the age property
    //     const newPerson = { ...person, age: person.age + 1 };
    //     setPerson(newPerson);
    //   };
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