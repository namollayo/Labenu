import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {

  const [nome,setNome] = useState("Labenu")


  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome}/>
    </div>
  )
}
