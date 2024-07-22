import React from "react";

export default function Student() {
    const [formData, setFormData] = React.useState("")

    const handleInputChange = (e) => {
        setFormData(e.target.value);
    };   
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormData((formData) => [...formData]);
    //     setFormData("")
    // };
    

  return (

    <div>


<form onClick={handleSubmit}>
        <input 
        placeholder="Name"
        type="text"
        value={formData}
        onChange={handleInputChange}
        />
        <button>Submit</button>

</form>
<h4>All the Names!</h4>
      <ul>
        {formData.map((formData) => (
          <li key={formData}>{formData}</li>
        ))}
      </ul>
    </div>
  )
}
