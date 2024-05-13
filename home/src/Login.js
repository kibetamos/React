import React from "react"

export default function Form() {
    // we first create state 
    const [formData, setFormData] = React.useState(
        {
        email: "",
        password1:"",
        password2:"",
        okayToEmail: true

        }
    )

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 
     * 
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 
     * 
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    // console.log(formData)

    //function to handle change in the input fields
    function handleChange(event){
        // Updating the form data state using the setFormData function
        //callback function
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {

            // Returning a new state object
            return{
                // Spread operator (...) to copy all properties from the previous state
                ...prevFormData,
                // Computed property name: using the input field's name attribute to dynamically update the corresponding property
                // [event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value

            }
        })

    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password1 === formData.password2){
            console.log("You are logged in")
            console.log(formData)
        }
        else{
            console.log("Wewe ni kumbafu sana")
        }
        
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password1"
                    value={formData.password1}
                    onChange={handleChange}
                />
                {/* <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                />
                 */}
                {/* <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        // id = "isAgreed"
                        name="okayToEmail"
                        value={formData.okayToEmail}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div> */}
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
