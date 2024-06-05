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


// const names = ['Alice', 'Bob', 'Charlie', 'David'];

// const NameList = () => {
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// };

// export default NameList;
