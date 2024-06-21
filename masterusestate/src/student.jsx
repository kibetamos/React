import React from "react";

export default function Student(){


    const[studentData, setStudentData] = React.useState({
        firstName:'ww',
        lastName:'rr',
        School:'eee'
    })

   function handleChange(e){
       setStudentData(e.target.value)
    }

    return(
        <div>
            <form>

                <input 
                type="text"
                placeholder="Firstname"
                onChange={handleChange}
                value={studentData.firstName}/>

                <input 
                type="text"
                placeholder="Lastname"
                onChange={handleChange}
                value={studentData.lastName}/>

                <input 
                type="text"
                placeholder="school"
                onChange={handleChange}
                value={studentData.School}/>

                <button>SAVE</button>


            </form>
        </div>
    )
}