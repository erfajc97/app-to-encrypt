import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Encrypted from './components/Encrypted'
import Prueba from './components/Prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     

     <Encrypted/>

      


    </div>
  )
}

export default App
