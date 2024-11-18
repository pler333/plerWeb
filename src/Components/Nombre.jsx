// escribir rfce para crear e componente mas rapido

import { useState } from "react"


function Nombre() {
  const [name, setName] = useState("Mi nombre")
  return (
    <div>
      <h1>Escribe tu nombre</h1>
      <input type="text"  placeholder= {name} />
    </div>
  )
}

export default Nombre

