<<<<<<< HEAD
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
=======
function Greeting({ username }) {
  return <h1>Hello, {username}!</h1>;
>>>>>>> 9d251ffffa2c94f41b9bf8a2163b379a03e8c3f5
}

export default Greeting;