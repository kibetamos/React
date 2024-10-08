import React from "react";

export default function Card() {

    const [data, SetData] = React.useState({
        firstname:"",
        lastname:""
    })


    const handleInputChange = (e) => {
        SetData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        SetData("")
        

    }
    
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
     <input 
        type="text"
        placeholder="FirstName"
        value ={data.firstname}
        onChange={handleInputChange}
        />
        <br />

    <input 
        type="text"
        placeholder="LastName"
        value ={data.firstname}
        onChange={handleInputChange}
        />
        <br/>
        <button>OK</button>

        </form>

        
        </div>
  )
}
