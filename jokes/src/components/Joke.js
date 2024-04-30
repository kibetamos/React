import React from "react";

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */


export default function Joke(props){
    const [shown, setisShow] = React.useState("false")

    function toggle (){
        console.log("Clicked")
    }
    
    console.log(props)
    return(
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <button onClick={toggle}>Click</button>
            <hr />
        </div>

    )
}