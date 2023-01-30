import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [condicional, setCondicional] = useState(1)
  const mudarTela = (n) => {
    setCondicional(n)
  }

  const renderScreen = () => {
    let render 
    if(condicional === 1){ render = <TelaLogin mudarTela={mudarTela}/>
          }

    else if (condicional === 2){
      render = <TelaCadastro mudarTela={mudarTela}/>
    }
    else {
      render = <TelaUsuarioCadastrado/>
    }
    return render
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {renderScreen()}
    </MainContainer>
  );
}

export default App;