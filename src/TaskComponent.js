import { useState } from 'react';

function TaskComponent({ tasks, onDelete }) {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    setSorted(true);
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sorted) return 0;
      return a.name.localeCompare(b.name);
    });

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleSort}>Sort by Name</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "5px" }}>
            {task.name} — {task.description}{" "}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComponent;