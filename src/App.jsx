import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [isActiveCard, setIsActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const onDrop = (status, index) => {
    if (isActiveCard === null) return;
    const taskToMove = tasks[isActiveCard];
    const updatedTasks = tasks.filter((_, i) => i !== isActiveCard);
    updatedTasks.splice(index, 0, { ...taskToMove, status });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="app-layout">
        <div className="sidebar">
          <SideBar />
        </div>

        <div className="main-content">
          <TaskForm setTasks={setTasks} />
          <main className="task-columns">
            <TaskColumn
              title="To do"
              icon={todoIcon}
              tasks={tasks}
              status="todo"
              handleDelete={handleDelete}
              setIsActiveCard={setIsActiveCard}
              onDrop={onDrop}
            />
            <TaskColumn
              title="Doing"
              icon={doingIcon}
              tasks={tasks}
              status="doing"
              handleDelete={handleDelete}
              setIsActiveCard={setIsActiveCard}
              onDrop={onDrop}
            />
            <TaskColumn
              title="Done"
              icon={doneIcon}
              tasks={tasks}
              status="done"
              handleDelete={handleDelete}
              setIsActiveCard={setIsActiveCard}
              onDrop={onDrop}
            />
          </main>

          <p className="active-card-label">Active card - {isActiveCard}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
