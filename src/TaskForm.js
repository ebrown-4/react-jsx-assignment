import { useState } from "react";

function TaskForm() {
    const [task, setTask] = useState("");
    
    return (
        <div>
            <h3>Task Form</h3>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
                <p>Current Task: {task}</p>
        </div>
    );
}
export default TaskForm;
