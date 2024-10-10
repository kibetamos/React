import React from "react";

export default function Form1(){

const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:""

})
// const {name, value, type, checked} = event.target
// setFormData(prevFormData => {
//     return {
//         ...prevFormData,
//         // [event.target.name]: event.target.value
//         [name]: type === "checkbox" ? checked : value
//     }
// })
function handleChange(event) {
    const{name, value, type, checked} = event.target
    setFormData(prevFormData =>{
        return{
            ...prevFormData, [name]:type === "checkbox" ? checked :value
        }
    }

)


}


    function handleSubmit(event){
        // PaymentRespons
        event.preventDefault()
        
        // submitToApi(formData)

        
        console.log(formData)

    }

    return(
        <form onSubmit={handleSubmit}>  
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

            <button>Submit</button>
            </form>
    )
}

