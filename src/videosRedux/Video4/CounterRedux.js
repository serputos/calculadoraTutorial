import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counter, increment, reset } from "../video3/counter";

export default function CounterRedux() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="Display">
        <p>Counter Redux</p>
        <div>{count}</div>
        <button onClick={() => dispatch(increment(+1))}>+1</button>
        {/*+1 es el amounte  de la function increment */}
        <button onClick={() => dispatch(increment(-1))}>-1</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}
