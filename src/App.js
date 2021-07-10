//imports here
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//variables can be added here (outside of the function components)


//root div App
function App() {
  //current task datastore 'state'
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk Clark (the dog)',
      day: 'July 9th at 20:00',
      reminder: true,
    },
    {
      id: 2,
      text: 'Walk Huey (the dog)',
      day: 'July 9th at 20:15',
      reminder: true,
    },
    {
      id: 3,
      text: 'Walk Bros (the humans)',
      day: 'July 9th at 20:30',
      reminder: false,
    },
    {
      id: 4,
      text: 'Consume Inbound (the beer)',
      day: 'July 9th at 20:45',
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task
      )
    )
  }


  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}  />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} /
        >
      ) : (
        "Click add for new task"
      )}
    </div>
  );
}

export default App;
