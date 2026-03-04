import Greeting from "./Greeting";
import Counter from "./Counter";
import UserInfo from "./UserInfo";
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
    </div>
  );
}

export default App;