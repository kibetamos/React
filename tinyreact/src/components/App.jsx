import { useState } from 'react'
import List from './List';
import Flower from './flowers';
import Greeting from './Greeting';
import Car from './Car';
import Teams from './teams';

export default function App() {
  const teams = ['Mavs', 'Warrioes', 'Bulls', 'Bucks', 'Wolves','Suns'];

  const cars = ['Honda', 'Toyota', 'Benzo', 'VW', 'Nissan',',Mazda'];

  const greetings = ['habari', 'shikamoo', 'sabalkheri', 'masalkheri', 'aheri'];

  const animals = ['Lion', 'Cow','Snake','Lizard'];

  const flowers = ['Rose', 'Lily', 'Daisy', 'Azalea'];
  
  // const animalsList = animals.map((animal) => <li>{animal}</li>)

  return (


    <div>
      
      <h1>Animals: </h1>
      <List animals = {animals} />

      <h1>Flowers: </h1>
      <Flower flowers = {flowers} />


      <h1>Greetings: </h1>
      <Greeting greetings = {greetings}/>

      <h1>Cars</h1>
      <Car cars ={cars}/>
      <h1>Teams</h1>
      <Teams teams ={teams}/>
      
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
 