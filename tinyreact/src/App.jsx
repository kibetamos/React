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
        {animals.map((animal) => {
          return <li key={animal}> {animal}</li>
        }
      )}
      </ul>
    </div>
  )
}

