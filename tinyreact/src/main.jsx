import React from 'react'
import ReactDOM from 'react-dom/client'
// import NameList from './Appp2.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
// import NameList from './appp2.jsx'
import UserList from './appp2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NameList /> */}
    < UserList/>
    {/* <Greeting /> */}
  </React.StrictMode>,
)
