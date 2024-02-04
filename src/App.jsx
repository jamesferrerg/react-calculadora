import { useState } from "react";
import "./App.css";

function App() {
  const [displayNumber, setDisplayNumber] = useState(0);

  const [valueToSave, setValueToSave] = useState(0);

  const [valueToOperate, setValueToOperate] = useState(0);

  const [symbol, setSymbol] = useState();

  const display = (value) => {
    const total = Number(`${valueToSave}${value}`);
    setValueToSave(total);
    setDisplayNumber(total);
  };

  const operation = (operator) => {
    displayNumber === valueToSave ? setValueToOperate(valueToSave) : setValueToOperate(displayNumber);
    setValueToSave(0);
    setSymbol(operator);
  };

  const result = () => {
    switch (symbol) {
      case "addition":
        setDisplayNumber(valueToOperate + displayNumber);
        break;
      case "substraction":
        setDisplayNumber(valueToOperate - displayNumber);
        break;
      case "multiplication":
        setDisplayNumber(valueToOperate * displayNumber);
        break;
      default:
        setDisplayNumber(valueToOperate / displayNumber);
        break;
    }
  };

  const reset = () => {
    setDisplayNumber(0);
    setValueToSave(0);
  };

  return (
    <>
      <div className="container">
        <p>Calculadora - React</p>
        <div className="calculator">
          <div className="calculator__display">{displayNumber}</div>

          <div className="calculator__keys">
            <button
              className="key--operator"
              onClick={() => operation("addition")}
            >
              +
            </button>
            <button
              className="key--operator"
              onClick={() => operation("substraction")}
            >
              -
            </button>
            <button
              className="key--operator"
              onClick={() => operation("multiplication")}
            >
              &times;
            </button>
            <button
              className="key--operator"
              onClick={() => operation("division")}
            >
              ÷
            </button>
            <button onClick={() => display(7)}>7</button>
            <button onClick={() => display(8)}>8</button>
            <button onClick={() => display(9)}>9</button>
            <button onClick={() => display(4)}>4</button>
            <button onClick={() => display(5)}>5</button>
            <button onClick={() => display(6)}>6</button>
            <button onClick={() => display(1)}>1</button>
            <button onClick={() => display(2)}>2</button>
            <button onClick={() => display(3)}>3</button>
            <button onClick={() => display(0)}>0</button>
            <button data-action="decimal">.</button>
            <button data-action="clear" onClick={reset}>
              AC
            </button>
            <button className="key--equal" onClick={result}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
