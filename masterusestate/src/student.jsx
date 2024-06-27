import React from "react";

export default function Student(){


    const[studentData, setStudentData] = React.useState({
        firstName:'',
        lastName:'',
        School:''
    });

//    function handleChange(e){

//        setStudentData(e.target.value);

//     };

    const handleChange = (event) => {
        setStudentData(event.target.value);
      };

    function handleSubmit(e){
        e.preventDefault()

        console.log(studentData)

    }

    return(
        
        <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Firstname"
                onChange={handleChange}
                value={studentData.firstName}
                
                />


                <input 
                type="text"
                placeholder="Lastname"
                onChange={handleChange}
                value={studentData.lastName}
                
                />

                <input 
                type="text"
                placeholder="school"
                onChange={handleChange}
                value={studentData.School}
                
                />

                <input 
                type="checkbox"
                placeholder="school"
                onChange={handleChange}
                value={studentData.School}
                />

                <button>SAVE</button>


            </form>

    )
}