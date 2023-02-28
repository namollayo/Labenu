import React from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'


function MainPage() {
  
  const handleClick = (event) => {
    event.preventDefault()
    window.confirm(`Deseja criar o curso ${form.nome} (de ${form.tecnologias}), composto por ${form.modulos} modulos e de autoria de ${form.responsavel}?`)

  }
  const { form, onChange } = useForm({nome:'', modulos:'', tecnologias:'', responsavel:''})

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          required
          onChange={onChange}
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          type="number"
          min="2"
          value={form.modulos}
          required
          onChange={onChange}
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          required
          onChange={onChange}
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          required
          pattern="^.{5,}$"
          title="O nome do Responsável deve ter no mínimo 5 Caracteres"
          onChange={onChange}
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
