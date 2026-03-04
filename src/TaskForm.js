import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task Form</h3>
      <input
        type="text"
        placeholder="Enter Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
      <p>Current Task: {task}</p>
    </form>
  );
}

export default TaskForm;