import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
const Foo = React.lazy(() => import("./Foo"));

function App() {
  const [count, setCount] = useState(0);
  const [showFoo, setShowFoo] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFoo(true), 10000);
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {showFoo ? <Foo /> : null}
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
