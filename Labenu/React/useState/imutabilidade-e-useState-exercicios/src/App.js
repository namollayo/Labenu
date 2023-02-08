import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Emolga",
    type: "Electric & Flying",
    evolved: true,
    weight: 5,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/9/96/0587Emolga.png/250px-0587Emolga.png',
    id: 587
  })

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon} setPokemon={setPokemon}/>
      {/* Crie aqui seus próximos pokemons! */}
      <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2}></PokemonCard>
    </FlexContainer>
  </>
    
  );
}

export default App;
