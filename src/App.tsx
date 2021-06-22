import Profiles from "./Profiles";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>SWR Test</h1>
      <hr />
      <h2>simple fetch</h2>
      <h4>axios.get.then + useState = swr?</h4>
      <Profiles />
    </div>
  );
}
