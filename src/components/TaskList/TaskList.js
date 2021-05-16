import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    //responsável por chamar o onaddtask
    onAddTask("Nova Tarefa", "Pendente");
  };

  //count está sendo modificado sempre que chamada a função increment
  //função map: transforma uma lista de elementos em outro elemento
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <TaskItem />;
        })}
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

//props passadas como parametros, pode-se definir os tipos, e evitar problemas
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
