import  {StyledHeader, StyledButton } from "../style"
import { useNavigate } from "react-router-dom";
import { irParaHome, irParaPerfil, irParaLogin } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={()=>{irParaHome(navigate)}} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=>{irParaPerfil(navigate,"Conway")}}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={()=>{irParaLogin(navigate)}}>
        Ir para página de login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
