import React from "react";

export default function Add(){
    const [values, setValues] = React.useState({
        number1: '',
        number2: ''
    })

    function handlechange(){
      setValues

    }

    function handleSubmit(){

    }
    
    return(

      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Number 1"
        onChange={handlechange}
        value={values.number1}
        />

        <input 
        type="text"
        placeholder="Number 2"
        onChange={handlechange}
        value={values.number2}
        />

        <button>ADD</button>

      </form>
    )
}