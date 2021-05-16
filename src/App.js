import React, { useState } from "react"; //importa-se para que o react seja detectado, e assim, renderize e compile a função.
import "./styles.css"; //estilo global
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAdd = 0; //acumula os id's da função
const generateId = () => {
  idAdd = idAdd + 1;
  return idAdd;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    //função encapsulada
    setTasks((existingTasks) => {
      //pega todos os elementos e adiciona nesse novo array -> ...
      return [...existingTasks, newTask];
    });
  };

  return (
    /*retorno da função App é um node html:
      - só pode-se encapsular os elementos html dentro de UMA div;
    */
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");
      </style>
    </div>
  );
}
