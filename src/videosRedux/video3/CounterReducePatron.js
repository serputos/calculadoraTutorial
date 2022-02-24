import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

export default function CounterReducePatron() {
  // const [count, setCount] = useState(0);
  // const counter = (state) => state + 1;

  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  /* action = {
    type: "INCREMENT",
    amount:1,
  };*/
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <div className="App">
      <div className="Display">
        <p>Counter Ract useReducer Patrons</p>
        <div>{count}</div>
        <button onClick={() => dispatch(increment(+1))}>+1</button>
        {/*+1 es el amounte  de la function increment */}
        <button onClick={() => dispatch(increment(-1))}>-1</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}
