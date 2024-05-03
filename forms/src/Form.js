import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState(
        {firstName: "",
         lastName: "", 
         email: "",
        comments: ""}
    )
     /**
     * Challenge: add an email field/state to the form
     */

     /**
     * Challenge: Track the applicant's last name as well
     */
    // const [lastname, setLastName] = React.useState("")s``


    
     /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */


    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // function Change(event){
    //     setLastName(event.target.value)

    //}
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />



            <input type="text" 
            placeholder="lastname"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />

            <input type="text" 
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            />

            <textarea 
            name="comments"
            placeholder="Comments"
            onChange={handleChange}
            value={formData.comments} />

        </form>
    )
}
