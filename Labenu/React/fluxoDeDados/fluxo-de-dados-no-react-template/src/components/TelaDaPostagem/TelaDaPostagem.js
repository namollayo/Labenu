import React from 'react'
import {ContainerPostagem, Image, Description, Title} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Title>{props.title}</Title>
            <Image src={props.urlPhoto} alt='drone view'/>
            <Description>{props.description}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem