import { useState } from 'react'

export default function App() {

  const animals = ['Lion', 'Cow','Snake','Lizard'];
  const animalsList = animals.map((animal) => <li>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {/* {animals.map((animal) => (
          
          <li key={animal}>

            {animal}
            
            </li>
        ))} */}
        {animalsList}
        
      </ul>
    </div>
  );
}

