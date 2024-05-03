import React from "react"

export default function Form() {

    const [firstName, setFirstName] = React.useState("")
     /**
     * Challenge: Track the applicant's last name as well
     */
    const [lastname, setLastName] = React.useState("")

    
    console.log(firstName, lastname)

    function handleChange(event){
        // console.log(event.target.value)

         /**
         * Challenge: update the firstName state on every keystroke
         */

        setFirstName(event.target.value)
        // console.log('Changed')
    }


    function Change(event){
        setLastName(event.target.value)

    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input type="text" 
            placeholder="lastname"
            onChange={Change}
            />
        </form>
    )
}
