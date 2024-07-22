import React from "react";

export default function Card() {

    const [data, SetData] = React.useState({
        firstname:"",
        lastname:""
    })

  return (
    <div>
        
        <input 
        type="text"
        placeholder="Name"
        value ={data}
        />
        
        
        </div>
  )
}
