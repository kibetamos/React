import React from "react";

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

 /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
export default function Joke(props){
    const [isShown, setIsShow] = React.useState(false)

    function toggle (){
        setIsShow(prevShown => !prevShown)
    }

    
    // isShown 
    console.log(isShown)
    return(
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            
            {/* {isShown} */}
            {isShown && <button onClick={toggle}>Hide Punchline</button>}
            {!isShown && <button onClick={toggle}>Show Punchline</button>}
            {/* <p>Punchline: {props.punchline}</p> */}
            {/* <button onClick={toggle}>Show Punchline</button> */}
            <hr />
        </div>

    )
}