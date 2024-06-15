import React from "react";


export default function Person(){
    const[person, setPerson] = React.useState({
        name: "John Doe",
        age: 10
    })


    // const IncreaseAge = () => {
    //     // mutating the current state object
    //     person.age = person.age + 1;
    //     setPerson(person);
    //   };
function IncreaseAge(){

        setPerson({...person,age:person.age+1})

}





function DecreaseAge(){
    setPerson({...person, age:person.age-1})
}
    return(
        <div>

        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={IncreaseAge}>Increase age</button>
        <button onClick={DecreaseAge}>Decrese Age</button>

        </div>

    );
}