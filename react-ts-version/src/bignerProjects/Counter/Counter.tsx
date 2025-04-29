import { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [value, setValue] = useState<number>(0);
  function handleInc(): void {
    setValue(() => value + 1);
  }

  function handleDec(): void {
    setValue(() => value - 1);
  }

  return (
    <div>
      <div className="container">
        <p className="number">{value}</p>
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
};

export default Counter;
