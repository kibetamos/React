import React from "react";


export default function Person(){
    const[person, setPerson] = React.useState({
        name: "John Doe",
        age: 10
    })
    const[formData, setFormData] = React.useState({
        firstname: 'firstname',
        lastname: 'lastname'
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
    event.preventDefault()


}

function DecreaseAge(){
    setPerson({...person, age:person.age-1})
}
    return(
        <div>
            <form onSubmit={handleChange}>
            {/* <input /> */}
            <input type="text" 
            placeholder="Firstname"
            onChange={handleChange}
            name="firstname"
            // value={formData.lastName}
            />
              <input type="text" 
            placeholder="Lastname"
            onChange={handleChange}
            name="lastname"
            // value={formData.lastName}
            />
            </form>

        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={IncreaseAge}>Increase age</button>
        <button onClick={DecreaseAge}>Decrese Age</button>

        </div>

    );
}