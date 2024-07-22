import React from "react";

export default function Card() {

    const [data, SetData] = React.useState({
        firstname:"",
        lastname:""
    })

    const handleInputChange = (e) => {
        SetData(e.target.value);
    };

  return (
    <div>
        <input 
        type="text"
        placeholder="Name"
        value ={data.firstname}
        onChange={handleInputChange}
        />
        
        </div>
  )
}
