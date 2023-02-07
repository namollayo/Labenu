import { useState } from "react";
import { TasksDone } from "./done"
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaFeita, setTarefaFeita] = useState([])
 

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaTarefaEnter = (e) => {
    if(e.which === 13){
    adicionaTarefa()}
  }

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) =>  item !== tarefa);
    addTaskDone(tarefa)
    setLista(listaFiltrada);
  };

  const addTaskDone = (tarefa) => {
    const completa = tarefa 
    setTarefaFeita([... tarefaFeita, completa])
  }


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={adicionaTarefaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <TasksDone tarefasFeitas={tarefaFeita}/>
    </ListaTarefasContainer>
  );
}
