import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { text: "Bugidibu", id: 1, date: "2021-08-02" },
    { text: "Ha ha yu dead", id: 2, date: "2021-08-03" },
    { text: "Cocoa Latte", id: 3, date: "2021-08-03" },
    { text: "Yass queen", id: 4, date: "2021-08-04" },
  ]);
  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
