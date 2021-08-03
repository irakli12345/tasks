import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { text: "Bugidibu", id: 1, date: "2021-08-02", reminder: true },
    { text: "Ha ha yu dead", id: 2, date: "2021-08-03", reminder: true },
    { text: "Cocoa Latte", id: 3, date: "2021-08-03", reminder: true },
    { text: "Yass queen", id: 4, date: "2021-08-04", reminder: true },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        buttonToggle={showAddTask}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Nothing to see here"
      )}
    </div>
  );
}

export default App;
