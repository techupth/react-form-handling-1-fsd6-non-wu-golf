import { useState } from "react";
import "./App.css";

function App() {
  const [greetingInputMessage, setGreetingInputMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleInputMessage = (event) => {
    setGreetingInputMessage(event.target.value);
  };
  const handleMessage = () => {
    setGreetingMessage(greetingInputMessage);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingInputMessage}
          onChange={handleInputMessage}
        />
      </div>

      <div className="buttons">
        <button onClick={handleMessage}>Update text</button>
      </div>
    </div>
  );
}

export default App;
