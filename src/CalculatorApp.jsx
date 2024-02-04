import "./CalculatorApp.css";
import { useCalculator } from "./hooks/useCalculator";

export const CalculatorApp = () => {
  const { displayNumber, operation, display, result, reset } = useCalculator();

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
