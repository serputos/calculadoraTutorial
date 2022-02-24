import CounterRedux from "./CounterRedux";
import { createStore } from "redux";
import { counter } from "../video3/counter";
import { Provider } from "react-redux";
import CounterReducePatron from "../video3/CounterReducePatron";

const store = createStore(counter, 0);

export default function Video4() {
  // const [count, setCount] = useState(0);
  // const counter = (state) => state + 1;
  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  /* action = {
    type: "INCREMENT",
    amount:1,
  };*/

  return (
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterRedux />
        <CounterReducePatron />
        <CounterReducePatron />
      </>
    </Provider>
  );
}
