import { useState } from "react";

function Greeting({ username }) {
  const [greeting, setGreeting] = useState("Hello");

  const handleChangeGreeting = () => {
    setGreeting("Welcome");
  };

  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h2>
        {greeting}, {username}!
      </h2>
      <p>Today's date: {today}</p>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
}

export default Greeting;