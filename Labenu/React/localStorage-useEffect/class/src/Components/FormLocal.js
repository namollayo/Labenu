import React, { useState, useEffect } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    const [contador, setContador] = useState(0)
    const [number, setNumber] = useState([])

    useEffect(()=> {
        acessTaskData()
    },[])

    const saveData = () => {
        const newData = nome 
        localStorage.setItem("nome", newData)
    }

    const acessData = () => {
        const savedData = localStorage.getItem("nome")
        if(savedData) {
            alert(`Nome Salvo: ${savedData}.`)
        }
    }

    const addTaskToList = () =>{
        const newListOfTask = [...listaTarefa, tarefa]
        setListaTarefa(newListOfTask)    
    }

    const saveTaskData = () => {
        const taskListString = JSON.stringify(listaTarefa)
        localStorage.setItem("tarefas", taskListString)
    }

    const acessTaskData = () => {
        const arrayTarefasString = localStorage.getItem("tarefas")
        const arrayTarefas = JSON.parse(arrayTarefasString)
        if(arrayTarefas) {
            setListaTarefa(arrayTarefas)
        }
    }

    const plusOne = () => {
        const sum = contador + 1
        setContador(sum)
    }

    const minusOne = () => {
        const sum = contador - 1
        setContador(sum)        
    }

    const addNumber = () => {
        const listNumber = [...number, contador]
        setNumber(listNumber)
        localStorage.setItem("SavedNumber", listNumber);
        
    }


    useEffect(()=> {
        if(contador){
            localStorage.setItem("contador", contador);
        }
    },[contador]);

    useEffect(() => {
        const contadorTela = JSON.parse(localStorage.getItem("contador"))
        if(contadorTela){
            setContador(contadorTela) 
        }
    },[]);

    return (
        <div>
            <title>{contador}</title>
            <Form>
                    <h3>Prática 1</h3>
                    <label htmlFor="nome">
                    nome:
                    <input name="nome" id="nome" value = {nome} onChange = {(e) => {setNome(e.target.value)}}/><br/>
                
                </label>
                <div>
                    <button onClick={saveData}>Guardar Dados</button>
                    <button onClick={acessData}>Acessar Dados</button>
                </div>
                <br />
                <h3>Prática 2</h3>
                <label htmlFor="tarefa">
                    tarefa:
                    <input name="tarefa" id="tarefa" value={tarefa} onChange = {(e) => setTarefa(e.target.value)} />
                </label>
                <button type="button" onClick = {addTaskToList}>adicionar Tarefa</button>
                <ul>
                    {listaTarefa.map((task) => {
                        return <li key={task}>{task}</li>;
                    })}
                </ul>
                <div>
                    <button onClick={saveTaskData}>Guardar tarefa</button>
                    <button onClick={acessTaskData}>Acessar tarefa</button>
                </div>
                <button 
                onClick={minusOne}>-</button>
                {contador}
                <button
                onClick={plusOne}>+</button>
                <button onClick={addNumber}> Save Number </button>
            </Form>
        </div>
    );
}