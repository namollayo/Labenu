import React, { useState } from "react";
import { Input } from "../MainPage/styles"
import { Form} from '../MainPage/styles'



const ConfirmationForm = () => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [etnia, setEtnia] = useState("");

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }
  
  const onChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const onChangeEtnia = (event) => {
    setEtnia(event.target.value)
  }

  const sendData2 = () => {
    if(
      date !== "" &&
      phone !== "" &&
      etnia !== ""
    ){
      alert("Inscrição foi finalizada")
      setDate("")
      setPhone("")
      setEtnia("")
    } else {
      alert("Dados incorretos. Por favor responda o formulário corretamente")
    }


  }

  return (
    <Form>
      <label> Data de Nascimento:
        <Input type="date"  value={date} onChange={onChangeDate}/>
      </label>
      <label> Celular:
        <Input type="tel" placeholder="(DD) 9 0000-0000" value={phone} onChange={onChangePhone}/>
      </label>              
      <label> Você se auto declara:
        <select value={etnia} onChange={onChangeEtnia}>
        <option value = ""></option>
        <option value = "Negro">Negro</option>
        <option value = "Branco">Branco</option>
        <option value = "Pardo">Pardo</option>
        <option value = "Amarelo">Amarelo</option>
        <option value = "Indígena">Indígena</option>
        <option value = "Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>
              
      <button onClick={sendData2}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm