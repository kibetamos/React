import React from "react";
import "../styles/education.css";
// import "./styles/Education.css";
export default function Education(){
    const [formData, setFormData] = React.useState({
        name:'',
        email:'',
        phone:''
    })
 
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
                name="name"
                placeholder="Name"
                value={formData.name}
                
                />

                Email: <input 
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                
                />

                Phone: <input 
                type="int"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                
                />
                <button>Save</button>
            </form>
        </div>
    )
}