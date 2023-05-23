import './App.css';
import Header from './components/Header';
import React, { useState } from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [{
      "first": "Nicole",
      "last": "Adelstein",
      "gender": "male"
    },
    {
      "first": "Pleuni",
      "last": "Pennings",
      "gender": "female"
    },

    {
      "first": "Rori",
      "last": "Rohlfs",
      "gender": "male"
    }]
  )

  const onAdd = (task) => {
    console.log(task)
    setTasks([...tasks, task])
  }

  const onToggleAdd = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container ">
      <Header showAddTask={showAddTask} onToggleAdd={onToggleAdd} />
      <Tasks tasks={tasks} setTasks={setTasks} />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {/* shortcut way of showing component only when boolean is true */}

    </div>
  );
}



export default App;
