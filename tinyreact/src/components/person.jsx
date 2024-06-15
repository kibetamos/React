import React from "react";


export default function Person(){
    const[person, setPerson] = React.useState({
        name: "John Doe",
        age: 10
    })
    const[formData, setFormData] = React.useState({

        firstName: "",
        lastName: ""
    })


    // const IncreaseAge = () => {
    //     // mutating the current state object
    //     person.age = person.age + 1;
    //     setPerson(person);
    //   };
function IncreaseAge(){

        setPerson({...person,age:person.age+1})

}
function handleChange(event){

    const {name, value, type, checked} = event.target

    setFormData(prevFormData => {
        return{
            ...prevFormData, [event.target.name]: event.target.value
        }

    })}

function handleSubmit(event){

    event.preventDefault()

    console.log(formData)
}


function DecreaseAge(){
    setPerson({...person, age:person.age-1})
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input /> */}
            <input type="text" 
            placeholder="First name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />

            <input type="text" 
            placeholder="Last name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />
            
            <button >Submit</button>

            </form>

        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={IncreaseAge}>Increase age</button>
        <button onClick={DecreaseAge}>Decrese Age</button>

        </div>

    );
}