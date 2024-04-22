import {Debug, HelloAtom} from "../";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <HelloAtom name="Aman" size="rough" spin={90} className="new_class" />
      </div>
      <Debug o={{one: "1", two: {inner: "2-inner"}}} className="debug_wrapper" />
    </>
  );
}

export default App;
