import React from 'react'
// import { useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {
  const { form, onChangeForm } = useForm({nome:'', idade:'', email:'', profissao:''})
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")
  // const [form, setForm] = useState({nome:'', idade:'', email:''})

  // const onChangeForm = (e) => {
  //   const { name, value } = e.target
  //   setForm({...form, [name]:value})
  // }
  // const onChangeNome = (event) => {
  //   setForm({...form, nome: event.target.value})
  // }

  // const onChangeIdade = (event) => {
  //   setForm({...form, idade: event.target.value})
  // }

  // const onChangeEmail = (event) => {
  //   setForm({...form, email: event.target.value})
  // }

  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email}, profissao ${form.profissao}`)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name={"nome"}
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          type="number"
          name={'idade'}
          value={form.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          type="email"
          name={'email'}
          value={form.email}
          pattern='\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b'
          onChange={onChangeForm}
          placeholder="name@email.com"
          title={'e-mail format: name@email.com'}
          required
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input 
          id="profissao"
          name={'profissao'}
          value={form.profissao}
          onChange={onChangeForm}
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
