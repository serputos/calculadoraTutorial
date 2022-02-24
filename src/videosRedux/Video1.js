import { useState } from "react";

function Video1() {
  const [count, setCount] = useState(0);
  const counter = (state) => state + 2;
  return (
    <div className="App">
      <div className="Display">
        <p>Counter React useState</p>
        <div>{count}</div>
        <button onClick={() => setCount(counter)}>+1</button>
      </div>
    </div>
  );
}

export default Video1;
