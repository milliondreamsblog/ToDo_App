import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import SideBar from "./components/SideBar";

const oldTasks = localStorage.getItem("tasks");

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [isActiveCrad ,  setIsActiveCard ] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status , index)=>{
    console.log(`${isActiveCrad} is going form ${index} to be placed ${index}`)

    if(isActiveCrad === null ||  isActiveCrad === undefined) return;
    const taskToMove = tasks[isActiveCrad];
    const updatedTasks = tasks.filter((task , index ) => index !== isActiveCrad)

    updatedTasks.splice(index , 0 , {
      ...taskToMove,
      status : status
    })

    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <SideBar />
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
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

      <p>
        active card - {isActiveCrad}
      </p>
    </div>

    
  );
};

export default App;
