import React, { useState } from 'react';

function Add() {
  const [values, setValues] = useState({
    number1: '',
    number2: ''
  });
  const [sum, setSum] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  // function handleCalculate(){
  //   const number1

  // }

  function handleCalculate() {
    const num1 = parseFloat(values.number1);

    const num2 = parseFloat(values.number2);

    if (!isNaN(num1) && !isNaN(num2)) {

      setSum(num1 * num2);

    } else {

      setSum('Invalid input');

    }
  }

  // if (!isNaN(number1) && !isNaN(number2)) {
  //       setSum(number1 + number2);
  //     } else {
  //       setSum('Invalid input');
  //     }

  return (
    <div>
      <input
        type="text"
        name="number1"
        value={values.number1}
        onChange={handleChange}
        placeholder="Enter first number"
      />
      <input
        type="text"
        name="number2"
        value={values.number2}
        onChange={handleChange}
        placeholder="Enter second number"
      />
      <div>
      <button onClick={handleCalculate}>Multiply</button>
      {sum !== null && <p>Answ: {sum}</p>}
      </div>
    </div>
  );
}

export default Add;
