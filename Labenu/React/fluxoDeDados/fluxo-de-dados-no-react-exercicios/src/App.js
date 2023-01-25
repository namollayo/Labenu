import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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
  const [pageFlow, setPageFlow] = useState(1);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState({
    name:"",
    photo:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a350613-2406-4477-af18-92df0a44db1b/d6728se-31988c79-0e59-4661-a853-1697b33fda73.png/v1/fill/w_960,h_803,strp/fundo_transparente_png_by_laryssaf_d6728se-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAzIiwicGF0aCI6IlwvZlwvMmEzNTA2MTMtMjQwNi00NDc3LWFmMTgtOTJkZjBhNDRkYjFiXC9kNjcyOHNlLTMxOTg4Yzc5LTBlNTktNDY2MS1hODUzLTE2OTdiMzNmZGE3My5wbmciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FIetyOACh-XkR_kYeSh1TUMONgBHb5PFcZPFeK--zn0"
  });

  const [title, setTitle] = useState("");
  const [photoPost, setPhotoPost] = useState("");
  const [description, setDescription] = useState("");
  const [dataPhoto, setDataPhoto] = useState({
    title:"",
    photoPost:"https://cdn-icons-png.flaticon.com/512/6723/6723328.png",
    description:""
  });
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
          data={data}/>
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow}
            name={name}
            setName={setName}
            photo={photo}
            setPhoto={setPhoto}
            data={data} 
            setData={setData}
           />
          ) : (
            <FormularioPostagem photoPost={photoPost}
            setPhotoPost={setPhotoPost}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            dataPhoto={dataPhoto}
            setDataPhoto={setDataPhoto} 
             />
          )}
        </aside>
        <TelaDaPostagem dataPhoto={dataPhoto}/>
      </Container>
    </>
  );
}

export default App;
