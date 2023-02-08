import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react'

export function Garagem({ nome, setNome }) {

  const mudaNome = () => {
    setNome("Conway")
  }

  const mudaCarro = () => {
    setAutomovel(carro2)
  }
  
  const [carro1, setCarro1] = useState({
    modelo: "HB20",
    cor: "Preto",
    ano: 2022,
    adicionadoPor: "Gabi",
    flex: true
  })

  const [carro2, setCarro2] = useState({    
    modelo: "Ônix",
    cor: "vermelho",
    ano: 2021,
    adicionadoPor: "Gabi",
    flex: true})
  

  const [automovel, setAutomovel] = useState({
    modelo: "Corsa",
    cor: "branco",
    ano: 2020,
    adicionadoPor: "Labenu",
    flex: true
  })


  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    <Botao onClick={mudaCarro}>Mudar Carro</Botao>
    </GaragemContainer>
  )
}
