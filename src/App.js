import React from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";

function App() {
    const tasks = [
        "Finish React homework",
        "Review JavaScript modules",
        "Push project to GitHub",
        "Study for upcoming exam",
        "Work on portfolio website"
    ];

    function getRandomTask() {
      const index = Math.floor(Math.random() * tasks.length);
      return tasks[index];
    }

    return (
        <div>
            <Greeting />
            <UserInfo />
            <TaskComponent task={getRandomTask()} />
        </div>
    );
}

export default App;