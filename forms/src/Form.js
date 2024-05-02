import React from "react"

export default function Form() {

    const [firstName, setFirstName] = React.useState("")

    function handlechange(){
        console.log('Changed')
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handlechange()}
            />
         
        </form> 
    )
}
