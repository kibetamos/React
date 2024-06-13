import { useState } from 'react'
import List from './List';
import Flower from './flowers';



export default function App() {



  const animals = ['Lion', 'Cow','Snake','Lizard'];

  const flowers = ['Rose', 'Lily', 'Daisy', 'Azalea'];
  
  // const animalsList = animals.map((animal) => <li>{animal}</li>)

  return (
    <div>
      
      <h1>Animals: </h1>

      <List animals = {animals} />

      <Flower flowers = {flowers} />
      
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
 