import { useState } from 'react'

export default function App() {

  const animals = ['Lion', 'Cow','Snake','Lizard'];

  return (
    <div>
     
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>                                                                           
          {animal}
          </li>
        }
      )}
      </ul>
    </div>
  )
}

