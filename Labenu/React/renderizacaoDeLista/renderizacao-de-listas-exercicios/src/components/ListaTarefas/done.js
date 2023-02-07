import { ListaContainer, TaskDone } from "./styled";

export function TasksDone({ tarefasFeitas }) {
    return (
        <ListaContainer>
          <ul>
            {tarefasFeitas.map((tarefa, index) => {
              return (
                <TaskDone key={index}>
                  <p>{tarefa}</p>
                </TaskDone>
              );
            })}
          </ul>
        </ListaContainer>
      );
}