import React from "react";
import "../styles/education.css";
// import "./styles/Education.css";
export default function Education(){
    const [formData, setFormData] = React.useState({
        name:'',
        email:'',
        phone:''
    })


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // [event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

 
    function handleSubmit(event){

        event.preventDefault()
        
        // submitToApi(formData)

        
        console.log(formData)

    }

    return(
        <div>
            <form className="vertical-form" onSubmit={handleSubmit}>

                Name: <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />

                Email: <input 
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                
                />

                Phone: <input 
                type="int"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.phone}
                
                />
                <button>Save</button>
            </form>
        </div>
    )
}