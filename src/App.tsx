import Profiles from "./Profiles";
import Counter, { DisplayCounter } from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>SWR Test</h1>
      <hr />
      <h2>Simple fetch</h2>
      <h4>axios.get.then + useState = swr?</h4>
      <Profiles />
      <hr />
      <h2>Global state</h2>
      <h4>Counter</h4>
      <Counter />
      <br />
      <h4>DisplayCounter</h4>
      <DisplayCounter />
      <br />
    </div>
  );
}
