import { useState } from "react";       
export default function TaskForm({ onAddTask }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || description.trim() === "") {
            alert("Task name and description cannot be empty.");
            return;
        }
        const newTask = {
            id: Date.now(),
            name: name.trim(),
            description: description.trim()
        };
        onAddTask(newTask);
        setName("");
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <div>
                <input
                    type="text"
                    placeholder="Enter Task Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: "10px"}}
                />
                <input
                    type="text"
                    placeholder="Enter Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ marginRight: "10px"}}
                />
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
}   