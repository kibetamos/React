import React from "react";

export default function Add(){
    const [values, setValues] = React.useState({
        number1: '',
        number2: ''
    })

    function handlechange(){

    }

    function handleSubmit(){

    }
    
    return(

      <Form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Number 1"
        onChange={handlechange}
        value={values.number1}/>

        <input 
        type="text"
        placeholder="Number 2"
        onChange={handlechange}
        value={values.number2}/>
      </Form>
    )
}