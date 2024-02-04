import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  const [valor, setValor] = useState(0);

  const [valor3, setValor3] = useState(0);

  const [simbolo, setSimbolo] = useState();

  const display = (numero) => {
    if (valor !== null) {
      const total = Number(`${valor}${numero}`);
      setValor(total);
      setState(total);
    }
  };

  const operacion = (operador) => {
    setValor3(valor);
    setValor(0);
    setSimbolo(operador);
  };

  const resultado = () => {
    switch (simbolo) {
      case "suma":
        setState(valor3 + state);
        break;
      case "resta":
        setState(valor3 - state);
        break;
      case "multiplicacion":
        setState(valor3 * state);
        break;
      default:
        setState(valor3 / state);
        break;
    }
  };

  const reset = () => {
    setState(0);
    setValor(0);
  };

  return (
    <>
      <div className="container">
        <p>Calculadora - React</p>
        <div className="calculator">
          <div className="calculator__display">{state}</div>

          <div className="calculator__keys">
            <button className="key--operator" onClick={() => operacion("suma")}>
              +
            </button>
            <button
              className="key--operator"
              onClick={() => operacion("resta")}
            >
              -
            </button>
            <button
              className="key--operator"
              onClick={() => operacion("multiplicacion")}
            >
              &times;
            </button>
            <button
              className="key--operator"
              onClick={() => operacion("division")}
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
            <button className="key--equal" onClick={resultado}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
