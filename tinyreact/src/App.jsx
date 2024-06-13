import { useState } from 'react'
import List from './List';

export default function App() {



  const animals = ['Lion', 'Cow','Snake','Lizard'];
  
  // const animalsList = animals.map((animal) => <li>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>

      <List animals = {animals} />
      {/* <ul> */}
        {/* {animals.map((animal) => (
          
          <li key={animal}>

            {animal}
            
            </li>
        ))} */}
        {/* {animalsList} */}
        
      {/* </ul> */}
    </div>
  );
}





// const obj2 = {
//   true: 'Boolean',
//   'true': 'String',
//  };
 
//  console.assert(obj2[true] === 'String');
 