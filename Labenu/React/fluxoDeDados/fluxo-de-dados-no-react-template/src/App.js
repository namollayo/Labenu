import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [urlPhoto, setUrlPhoto] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          urlPhoto={urlPhoto}
          setUrlPhoto={setUrlPhoto} 
          description={description}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}/>
        </aside>
        <TelaDaPostagem
        urlPhoto={urlPhoto}
        description={description}
        title={title}/>
      </Container>
    </>
  );
}

export default App;
