import React from "react";
import "../styles/general_info.css";
// import "./styles/Education.css";
export default function General(){
    const [editing, setEditing] = React.useState(true);
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

    const handleEdit = () => setEditing(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    return(

        <div>
            {editing ? (
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
                <button type="submit">Submit</button>
                {/* <button onClick={handleEdit}>Edit</button> */}
            </form>
            ) : (
                <div>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}


        </div>
    )
}