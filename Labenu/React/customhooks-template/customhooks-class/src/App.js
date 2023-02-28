import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
// import { BASE_URL } from "./constants/constants"; 

import { useRequestData } from "./hooks/useRequestData";


function App() {

  // const nomeUsuarios = useCapturarNome()
  // const postagens = useCapturarPostagem()
  const [nomeUsuarios, isLoadingUsers, errorUser] = useRequestData('users')
  const [postagens, isLoadingPosts, errorPost] = useRequestData('comments')

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        { errorUser? (<p> Erro de requisição, tente novamente!</p>):
        !isLoadingUsers? nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        }) : (<p>Carregando, aguarde um pouquinho!</p>)}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      { errorPost? (<p> Erro de requisição das postagens, tente novamente!</p>) : 
      !isLoadingPosts? postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      }) : (<p>Carregando, aguarde um pouquinho!</p>)}
      </PostContainer>
    </div>
  );
}

export default App;



