import { useCalculator } from "./hooks/useCalculator";

export const CalculatorApp = () => {
  const { displayNumber, operation, display, answer, reset } = useCalculator();

  return (
    <>
      <div className="container">
        <p>Calculator - React</p>
        <div className="calculator">
          <div className="calculator__display" aria-label="display-number">{displayNumber}</div>

          <div className="calculator__keys">
            <button
              className="key--operator"
              onClick={() => operation("addition")}
              aria-label="addition"
            >
              +
            </button>
            <button
              className="key--operator"
              onClick={() => operation("substraction")}
              aria-label="substraction"
            >
              -
            </button>
            <button
              className="key--operator"
              onClick={() => operation("multiplication")}
              aria-label="multiplication"
            >
              &times;
            </button>
            <button
              className="key--operator"
              onClick={() => operation("division")}
              aria-label="division"
            >
              ÷
            </button>
            <button aria-label="seven" onClick={() => display(7)}>7</button>
            <button aria-label="eight" onClick={() => display(8)}>8</button>
            <button aria-label="nine" onClick={() => display(9)}>9</button>
            <button aria-label="four" onClick={() => display(4)}>4</button>
            <button aria-label="five" onClick={() => display(5)}>5</button>
            <button aria-label="six" onClick={() => display(6)}>6</button>
            <button aria-label="one" onClick={() => display(1)}>1</button>
            <button aria-label="two" onClick={() => display(2)}>2</button>
            <button aria-label="three" onClick={() => display(3)}>3</button>
            <button aria-label="zero" onClick={() => display(0)}>0</button>
            <button data-action="decimal">.</button>
            <button data-action="clear" aria-label="reset" onClick={reset}>
              AC
            </button>
            <button className="key--equal" aria-label="answer" onClick={answer}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
