import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/education'
function App() {
  // const [count, setCount] = useState(3)

  return (
    <>
      <div>
      </div>
      <h1>CV Application</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        < Education/>
        
      </div>
    </>
  )
}

export default App
