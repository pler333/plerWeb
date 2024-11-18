
import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu.jsx'
import Nombre from './Components/Nombre.jsx';


function App() {

  
  //esta es la forma de crear una variable reactiva
   const [number, setNumber] = useState (0);

  const addOne = () => {
    setNumber(number + 1)
  }

  return (
    <>
  <div>
    <Menu></Menu>
    <Nombre></Nombre>
  </div>
    </>
  )
}

export default App
