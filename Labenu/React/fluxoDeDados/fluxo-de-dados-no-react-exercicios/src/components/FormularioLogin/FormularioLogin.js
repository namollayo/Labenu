import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({name, setName, photo, setPhoto, setPageFlow, data, setData}) => {
  const login = () => {
    
    setData({
      name:name,
      photo:photo})
    setPageFlow(2);
  };

  const onChangePhoto = (event) => {
    setPhoto(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input value={name} onChange={onChangeName} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input value={photo} onChange={onChangePhoto}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
