import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

export function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1> Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Celular:
          <Input id="telefone" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Confirmar Cadastro!</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(2)}>Voltar</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

// Um input para endereço
// Um input para número da residência
// um input para telefone
// um input para complemento
// um botão para ser usado para passar a próxima página