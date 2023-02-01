import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";


export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "Aula Labenu",
    "Estudar React",
    "Fazer Almoço"
  ])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const renderizaTela = () => {
    return lista.map((item, index) => {
      return(
        <Tarefa key={index}>
          <p>{item}</p>
          <RemoveButton onClick={()=>removeTarefa(index)}>
            <img src={bin} alt="" width="16px" />
          </RemoveButton>
        </Tarefa>
      );
    })
  }

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  const removeTarefa = (itemIndex) => {
    const listaFiltrada = lista.filter((elemento, index) => {
    // return elemento !== item
    return index !== itemIndex})
    setLista(listaFiltrada)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick = {adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizaTela()}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
