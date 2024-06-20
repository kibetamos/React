import React from "react";


export default function Form(){

    //create  a use state that has the required inputs
    const [formData, setFormData] = React.useState({
        firstName: "", 
        lastName: "", 
        email: "", 
    })

      // Handle input changes
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };


    // Handle form submission
  const handleSubmit = (event) => {

    // prevent the default form submission
    event.preventDefault();

    // Display the form values
    console.log('Form submitted:', formData);
  };


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            />

            <input type="text" 
            placeholder="lastname"
            name="lastName"
            onChange={handleChange}
            />

            <input type="text" 
            placeholder="email"
            name="email"
            onChange={handleChange}
            />
        <button >Submit</button>
        </form>
    )

    
}