import React from "react";
import "../styles/general_info.css";
// import "./styles/Education.css";
export default function General(){
    const [editing, setEditing] = useState(true);
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

    function handleSubmit(event){

        event.preventDefault()
        
        // submitToApi(formData)
        setEditing(false);
        
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
                <button onClick={handleEdit}>Edit</button>
            </form>
        </div>
    )
}