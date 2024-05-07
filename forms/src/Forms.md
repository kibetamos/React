# NOtes on Forms

-textarea
-input -general type
-radio buttons
-Checked

        function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // [event.target.name]: event.target.value
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
      function handleChange(event){
        const{name,value, type, checked} = evemt.target
        serForm(prevDataForm =>{
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }

        })
    }