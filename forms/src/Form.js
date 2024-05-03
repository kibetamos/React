import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )
     /**
     * Challenge: Track the applicant's last name as well
     */
    // const [lastname, setLastName] = React.useState("")s``

    
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
            />



            <input type="text" 
            placeholder="lastname"
            onChange={handleChange}
            name="lastName"
            />
        </form>
    )
}
