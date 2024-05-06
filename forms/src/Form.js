import React from "react"

export default function Form() {

    const [formData, setFormData] = React.useState(
        {firstName: "",
         lastName: "", 
         email: "",
        comments: "",
        isFriendly:true
}
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
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // [event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value
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
            value={formData.comments} 
            />
{/* /*
    This is a checkbox input element.
    It allows users to select or deselect an option.
    The 'type' attribute specifies the type of input, which is 'checkbox'.
    The 'id' attribute uniquely identifies this input element as 'isFriendly'.
*/ }
           <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly" 
            />
 {/* This is a label associated with the checkbox input.
    The 'for' attribute associates the label with the input element having the same id ('isFriendly').
    Users can click on this label to toggle the checkbox. */}

            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br/>

            {/* Lets add radio buttons
             */}
             <fieldset>
                <legend>Current Employee Status</legend>

                <input 
                type="radio"
                id="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                type="radio"
                id="part-time"
                />
                <label htmlFor="part-time">Part time</label>

            < br />

            <input 
            type="radio"
            id="full-time"

            />
            <label htmlFor="full-time">full Time</label>
            <br />
             </fieldset>
        </form>

    )
}
