import React from "react";

export default function Student(){


    return(
        <div>
            <form>

                <input 
                type="text"
                placeholder="Firstname"
                onChange={handleChange}
                value={text}/>

                <input 
                type="text"
                placeholder="Lastname"
                onChange={handleChange}
                value={text}/>



                <input 
                type="text"
                placeholder="school"
                onChange={handleChange}
                value={text}/>


            </form>
        </div>
    )
}