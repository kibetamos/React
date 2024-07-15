import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Pokemon from './components/Pokemon.jsx'
// import App from 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pokemon />
  </React.StrictMode>,
)
