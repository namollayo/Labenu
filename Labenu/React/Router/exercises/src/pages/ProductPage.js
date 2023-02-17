import { Header } from "../components/Header";
import { useParams } from "react-router-dom";

export function ProductPage(){
    const pathParams = useParams()

    return (
        <section>
              <Header/>
          <h1>Página do {pathParams.id}</h1>
          {pathParams.id === "Pikachu"? (<img src="https://i.pinimg.com/474x/ed/fd/dc/edfddc98a6bba50cbc6d0aef911a59cc--cute-pikachu-adorable-animals.jpg"/>) : <p>No Pikachu :/</p>}
        </section>
      );
}