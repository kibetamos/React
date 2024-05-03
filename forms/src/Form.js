import React from "react"

export default function Form() {

    const [firstName, setFirstName] = React.useState("")

    
    console.log(firstName)

    function handleChange(event){
        console.log(event.target.value)

         /**
         * Challenge: update the firstName state on every keystroke
         */

        setFirstName(event.target.value)
        // console.log('Changed')
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
