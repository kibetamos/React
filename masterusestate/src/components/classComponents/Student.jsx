import React from "react";

export default function Student() {
    const [formData, setFormData] = React.useState("")

  return (

    <div>
<form>


        <input 

        placeholder="Name"
        type=""
        value={formData}
        />

</form>
    </div>
  )
}
