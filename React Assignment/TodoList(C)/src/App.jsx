import React, { useState } from 'react'
import './App.css'
import EntryForm from './components/functionalComponents/EntryForm'
import DisplayList from './components/functionalComponents/DisplayList'

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task])
    console.log(tasks)
  }
  const deleteTask = (targetitemindx) => {
    setTasks(tasks.filter((task, indx) => indx !== targetitemindx))
  }
  const toggleTask = (targetitemindx) => {
    const updatedTasks = tasks.map((task, indx) => {if (targetitemindx === indx) {
    task.completed = !task.completed
      }
    return task
    })
    setTasks(updatedTasks)
  }

  const taskElements = tasks.map((task, indx) => <DisplayList toggleTask = { toggleTask } deleteTask = { deleteTask } indx = {indx} task = {task.task} completed = {task.completed}/>)
  return (

      <div className="App">
        <EntryForm addTask={ addTask }/>
        
        {taskElements}
      </div>
  )
}

export default App
