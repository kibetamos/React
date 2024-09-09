import { useState } from 'react'
import List from './List';
import Flower from './flowers';
import Greeting from './Greeting';
import Car from './Car';
import Teams from './teams';
import Button from './buttons';
import Person from './person';

export default function App() {
  const teams = ['Mavs', 'Warrioes', 'Bulls', 'Bucks', 'Wolves','Suns'];

  const cars = ['Honda', 'Toyota', 'Benzo', 'VW', 'Nissan',',Mazda'];

  const greetings = ['habari', 'shikamoo', 'sabalkheri', 'masalkheri', 'aheri'];

  const animals = ['Lion', 'Cow','Snake','Lizard'];

  const flowers = ['Rose', 'Lily', 'Daisy', 'Azalea'];
  
  // const animalsList = animals.map((animal) => <li>{animal}</li>)

  return (


    <div>
      
      {/* <h1>Animals: </h1>
      <List animals = {animals} /> */}

      <h1>Flowers: </h1>
      <Flower flowers = {flowers} />


      {/* <h1>Greetings: </h1>
      <Greeting greetings = {greetings}/> */}

      <h1>Cars</h1>
      <Car cars ={cars}/>
      <h1>Teams</h1>
      <Teams teams ={teams}/>
     
     <h1>Person</h1>
     {/* <Button text="Click Me!" color="blue" fontSize={12}/>
     <Button text="Don't Click Me!" color="red" fontSize={12}/>
     <Button text="Click Me!" color="blue" fontSize={20}/> */}
     <Person />
      
      {/* <ul>
        {animals.map((animal) => (
          
          <li key={animal}>

            {animal}
            
            </li>
        ))}
        {animalsList}
        
      </ul> */}
    </div>
  );
}





// const obj2 = {
//   true: 'Boolean',
//   'true': 'String',
//  };
 
//  console.assert(obj2[true] === 'String');
 


const [stateValue, setStateValue] = React.useState(initialValue);
