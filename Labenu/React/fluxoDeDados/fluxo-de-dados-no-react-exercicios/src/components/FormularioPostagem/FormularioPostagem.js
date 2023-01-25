import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({title, setTitle, photoPost, setPhotoPost, description, setDescription, dataPhoto, setDataPhoto}) => {
    const enviarFoto = () => {
    if(title !=="" &&
      description !=="" &&
      photoPost !=="") {

        setDataPhoto({
          title: title,
          photoPost: photoPost,
          description: description
        })
console.log(dataPhoto);
      } else {
        alert("Por Favor Inserir os Dados Necessários")
      }
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={photoPost} onChange={(e) => {setPhotoPost(e.target.value)}} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={description} onChange={(e) => {setDescription(e.target.value)}} />
        </StyledLabel>
      </Form>
      <SendButton onClick={enviarFoto}> Enviar Foto </SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
