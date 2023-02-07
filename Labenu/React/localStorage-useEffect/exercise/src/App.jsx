import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    const tarefasString = JSON.stringify(tarefas)
    if(tarefas.length > 0){
    localStorage.setItem("tarefas", tarefasString)}
    },
    [tarefas]
  );

  useEffect(() => {
    const tarefasString = localStorage.getItem("tarefas")
    if(tarefasString) { 
      const tarefasArray = JSON.parse(tarefasString)
      setTarefas(tarefasArray)
    }},
    []
  );

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }
  const criaTarefaEnter = (event) => {
    if(event.which === 13){
    criaTarefa()}
  }

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue, 
      completa: false
    }
    const addTarefa = [...tarefas, novaTarefa]
    setTarefas(addTarefa)
    setInputValue("")
  }

  const selectTarefa = (id) => {
    const tarefasUpdate = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    setTarefas(tarefasUpdate)
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  }


  const listaFiltrada = tarefas.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });


  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onKeyPress = {criaTarefaEnter} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              key={tarefa.id}
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
