import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmEmail, setConfirmEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmEmail = (event) => {
  setConfirmEmail(event.target.value)
}

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email)
};

const sendData = () => {
  if(name.length >= 10 &&
    name.length <= 30  &&
    age >= 18 &&
    validateEmail(email) &&
    email === confirmEmail &&
    name !== "" &&
    age !== "" &&
    email !==""
  ){
    setFormFlow(2)
  }
  else {
    alert("Dados incorretos. Por favor responda o formulário corretamente")
  }
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm 
      name={name}
      age={age} 
      email={email} 
      confirmEmail={confirmEmail}
      formFlow={formFlow} 
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      onChangeConfirmEmail={onChangeConfirmEmail}
      sendData={sendData}
      // insira aqui suas props
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage