import React from "react";
import "./Education.css";
export default function Education(){


    return(
        <div>
            <form>
                Name: <input 
                type="text"
                name="name"
                placeholder="Name"
                
                />

                Email: <input 
                type="text"
                name="email"
                placeholder="Email"
                
                />

                Phone: <input 
                type="int"
                name="phone"
                placeholder="Phone Number"
                
                />
            </form>
        </div>
    )
}