import { useState } from "react";
import "./counter.css";

function Counter() {
  const [value, setValue] = useState(0);
  function handleInc() {
    setValue(() => value + 1);
  }
  function handleDec() {
    setValue((e) => value - 1);
    // setValue((e) => e - 1);
  }
  return (
    <div>
      <div className="container">
        <h1 className="number">{value}</h1>
      </div>
      <div className="btns-container">
        <button className="increment" onClick={handleInc}>
          +
        </button>
        <button className="increment" onClick={handleDec}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
