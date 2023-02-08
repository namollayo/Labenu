import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        return props.pokemon.evolved ? 
        props.pokemon : props.setPokemon({...props.pokemon, name:"Pikachu", weight:6, image:"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/600px-0025Pikachu.png"})
    }
    
  return (
    
    <Card color={props.pokemon.color}>
        <img width="200px" src={props.pokemon.image} alt={`Pokemon ${props.pokemon.name}`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard