import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = ({name, age, email, confirmEmail, onChangeName, onChangeAge, onChangeEmail, onChangeConfirmEmail, sendData}) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={name} onChange={onChangeName}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={age} onChange={onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={confirmEmail} onChange={onChangeConfirmEmail}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm