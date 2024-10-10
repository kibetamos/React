import React from "react";

export default function Form1(){

const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:""

})
    function handleChange(event){
        
    }

    function handleSubmit(event){
        // PaymentRespons
        event.preventDefault()
        
        // submitToApi(formData)

        
        console.log(formData)

    }

    return(
        <form>
            <input
            type="text"
            placeholder="Firstname"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            />

            <input 
            type="text"
            placeholder="LastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            />

            <button onSubmit={handleSubmit}>Submit</button>
            </form>
    )
}

