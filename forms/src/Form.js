import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    // console.log(formData.employment)
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
    // console.log(formData)

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
    function handleSubmit(event){
        event.preventDefault()
        // submitToApi(formData)

        
        console.log(formData)

    }
    return (
        <form onSubmit={handleSubmit}>
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
                name="employment"
                value="unemployed"
                onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                onChange={handleChange}
                />
                <label htmlFor="part-time">Part time</label>

            < br />

            <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}

            />
            <label htmlFor="full-time">full Time</label>
            <br />
             </fieldset>
             <br />
             <label htmlFor="favColor">What is your fav Color</label>

             <br />
             <select 
             id="favcolor"
             value={formData.favColor}
             onChange={handleChange}
             name="favColor"
             >
                <option value="">-- Choose --</option>
             <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option  value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
             </select>
             <br />
            <br />
            <button >Submit</button>
        </form>

    )
}
