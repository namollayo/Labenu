import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  let userData 

  const handleName = (event) => {
    setNome(event.target.value)
  }

  const handleAge = (event) => {
    setIdade(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setSenha(event.target.value)
  }

  const sumbitData = () => {
  userData += {
    name:nome,
    age:idade,
    email:email,
    password:senha
  }
  console.log(userData);
  setNome("")
  setIdade("")
  setEmail("")
  setSenha("")

  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={handleName}/>
        </label>
        <label>
          Idade:
          <Input value={idade} type="number" onChange={handleAge}/>
        </label>
        <label>
          E-mail:
          <Input value={email} type="email" onChange={handleEmail}/>
        </label>
        <label>
          Senha:
          <Input value={senha} type="password" onChange={handlePassword}/>
        </label>
      <button onClick={sumbitData}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
