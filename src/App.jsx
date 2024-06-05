import { useState } from "react";
import "./App.css";

function App() {
  let [newGreetingMessage, setNewGreetingMessage] = useState("");
  let [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const handleClick = () => {
    setGreetingMessage((greetingMessage = newGreetingMessage));
    setNewGreetingMessage((newGreetingMessage = ""));
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGreetingMessage}
          onChange={(event) => setNewGreetingMessage(event.target.value)}
          required
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
