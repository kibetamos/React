import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Greeting from './components/Greeting.jsx'
import './index.css'
// import NameList from './appp2.jsx'`
// import UserList from './appp2.jsx'
import Flower from './components/flowers.jsx'
import List from './components/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// function Greeting(props) {
//   return (

//   <div>
    
//     <h1>Hello, {props.name}!</h1>

//     </div>

//   );
// }
// class Greeting extends React.Component {

//   render() {

//     return(
//       <div>

//         <h1>Hello, {this.props.name}!</h1>;

//       </div>
//     );
   
//   }
// }

// const element = <h1>Hello, world!</h1>;

// export default function Welcome(props) {

//   return (
//     <diV>
//       <h1>Hello, {props.name}</h1>
//     </diV>
//   )
// }

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     return <div>{this.state.count}</div>;
//   }
// }
