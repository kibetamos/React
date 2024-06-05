import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
// import NameList from './appp2.jsx'
// import UserList from './appp2.jsx'
import Flower from './flowers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    < Flower />
    {/* < UserList/> */}
    {/* <Greeting /> */}
  </React.StrictMode>,
)
