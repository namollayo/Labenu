import logo from './img/logo.png';
import './App.css';

function App() {
  const nome = "Gabi"
  function olaMundo() {
    alert("Olá, Mundo!")
  }
  const onClickBotao = () => {
    alert("Botão foi clicado!");
}
  return (
    <div>
      <div>
        <h1>Introdução ao React</h1>
        <button onClick={olaMundo} className = "meu-nome">Clique em mim, {nome}</button>
      </div>
      <div className = "fixacao">
        <div className="container">
          <h1>Aprenda React na Labenu!</h1>
          <div>
            <div>
              <img className ="Logo" src={logo} alt="logo"/>
            </div>
            <div>
              <a href="https://labenu.com.br" target="_blank" rel="noreferrer">Site da Labenu</a>
            </div>
            <div>
              <button onClick={onClickBotao}> Clique aqui! </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
