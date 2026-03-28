<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 9d251ffffa2c94f41b9bf8a2163b379a03e8c3f5
import Greeting from "./Greeting";
import Counter from "./Counter";
import UserInfo from "./UserInfo";
<<<<<<< HEAD
import TaskComponent from "./TaskComponent";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", description: "Milk, eggs, bread" },
    { id: 2, name: "Study React", description: "Props, State, Forms" },
    { id: 3, name: "Buy office supplies", description: "Pens and notebooks" }
  ]);

  // Add Task (Task 4)
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Delete Task (Task 5)
  const deleteTask = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Midterm React App</h1>

      {/* Task 1 */}
      <Greeting username="Alice" />

      <hr />

      {/* Task 2 */}
      <UserInfo name="John Doe" profession="Developer" />

      <hr />

      {/* Task 4 */}
      <h2>Task Manager</h2>
      <TaskForm onAddTask={addTask} />

      {/* Task 3 + Task 5 */}
      <TaskComponent tasks={tasks} onDelete={deleteTask} />
=======
import TaskForm from "./TaskForm";
import "./App.css";

function App() {
  // Task 3: List of tasks
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

  // Task 4: Function passed as prop
  function handleAlert() {
    alert("Button clicked!");
  }

  return (
    <div className="App">
      {/* Task 1 */}
      <Greeting username="Alice" />
      <Greeting username="Bob" />

      {/* Task 2 */}
      <Counter />

      {/* Task 3 */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* Task 4 */}
      <UserInfo name="Ericka Brown" age={31} handleClick={handleAlert} />

      {/* Task 5 */}
      <TaskForm />
>>>>>>> 9d251ffffa2c94f41b9bf8a2163b379a03e8c3f5
    </div>
  );
}

export default App;