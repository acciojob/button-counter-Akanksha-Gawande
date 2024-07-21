import React from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount = count + 1;
  };

  return (
    <div>
      <p>Button clicked {setCount} Times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
