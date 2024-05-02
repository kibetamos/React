import React from "react"

export default function Form() {

    const [firstName, setFirstName] = React.useState("")

    function handleChange(){
        console.log('Changed')
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
