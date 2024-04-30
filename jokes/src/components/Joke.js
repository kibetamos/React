import React from "react";

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */


export default function Joke(props){
    const [isShown, setIsShow] = React.useState(false)

    function toggle (){
        setIsShow(prevShown => !prevShown)
    }
    
    console.log(isShown)
    return(
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <button onClick={toggle}>Show Punchline</button>
            <hr />
        </div>

    )
}