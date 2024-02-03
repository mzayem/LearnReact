import React, { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setstep] = useState(1);
  const [Count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + Count);

  return (
    <>
      <div>
        <p>steps</p>
        <button onClick={() => setstep((s) => s - 1)}>-</button>
        <span> {step} </span>
        <button onClick={() => setstep((s) => s + 1)}>+</button>
      </div>
      <div>
        <p>count</p>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span> {Count} </span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {Count === 0
              ? `Today is `
              : Count > 0
              ? `${Count} Days from today is`
              : `${Math.abs(Count)} Days ago was `}
          </span>
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;
