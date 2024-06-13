import React from "react"
import App from './App';


export default function Greeting(props){
    return(
        // <h1>
            
        //     &quot;
        //     I swear by my pretty floral bonnet, I will end you.
        //     &quot;
            
        //     </h1>
        <div>
            {props.greetings.map((greeting) =>{

                return<li>{greeting}</li>

            })}
        </div>
        // {props.animals.map((an) =>{
        //     return an.startsWith("L") ? <li key={an}>{an}</li> : null;
        //   })}
    );
}

