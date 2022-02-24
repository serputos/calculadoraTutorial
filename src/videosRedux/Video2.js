import { useReducer } from "react";

function Video2() {
  // const [count, setCount] = useState(0);
  // const counter = (state) => state + 1;

  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, dispatch] = useReducer(
    (state, argument) => state + argument,
    0
  );

  return (
    <div className="App">
      <div className="Display">
        <p>Counter React useReducer</p>
        <div>{count}</div>
        <button onClick={() => dispatch(+1)}>+1</button>
        <button onClick={() => dispatch(-1)}>-1</button>
      </div>
    </div>
  );
}

export default Video2;
