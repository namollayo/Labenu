import { FormContainer, Form, Input, StyledLabel } from "./styled";


export const FormularioCadastro = ({urlPhoto, setUrlPhoto, description, setDescription, title, setTitle}) => {

  const handlePhotoInput = (e) => {
    setUrlPhoto(e.target.value);
  }
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="title">
          Title:
          <Input id="title" value={title} onChange={handleTitleInput}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={urlPhoto} onChange={handlePhotoInput}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro