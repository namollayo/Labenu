import Header from "../components/Header";
import { MainContainer} from "../style";

function ErrorPage(){
    return (
        <MainContainer>
          <Header />
          <h1>EITA, DEU ERRO!</h1>
        </MainContainer>
      );
}

export default ErrorPage;