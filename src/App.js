import Greeting from "./Greeting";
import Counter from "./Counter";
import UserInfo from "./UserInfo";
import TaskForm from "./TaskForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <Greeting username="Alice" /> <Greeting username="Bob" />
      <Counter />
      <UserInfo name="Ericka Brown" age={31} />
      <TaskForm />
    </div>
  );
}

export default App;