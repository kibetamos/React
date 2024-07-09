import React, { useState } from 'react';

const EventHandlingComponent = () => {

  const [inputValue, setInputValue] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleClick = () => {

    alert('Button clicked!');

  };

  const handleChange = (event) => {

    setInputValue(event.target.value);
    
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    //change the state from false to true.
    setFormSubmitted(true);

    console.log('Form submitted with value:', inputValue);
  };

  return (

            <div>
                {/* <button onClick={handleClick}></button> */}

            <button onClick={handleClick}>Click Me!</button>

            <form onSubmit={handleSubmit}>

                <input

                type="text"

                value={inputValue}

                onChange={handleChange}

                placeholder="Type something..."

                />

                <button type="submit">Submit</button>

            </form>

            {formSubmitted && <p>Form was submitted with value: {inputValue}</p>}
            </div>
  );

};

export default EventHandlingComponent;
