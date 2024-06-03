import { useState } from 'react'

import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)
  const animals = ['Lion', 'Cow','Snake','Lizard'];


  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {/* <li>Lion</li>
        <li>Cow</li>
        <li>Snake</li>
        <li>Lizard</li> */}
        {/* 
      Dynamically rendering list items using the `map` function on the `animals` array.
      Each item in the `animals` array is rendered as an <li> element with a unique `key` attribute.
    */}
        {animals.map((animal) => {
          return <li key={animal}> {animal}</li>
        }
      )}
      </ul>
    </div>
  )
}

