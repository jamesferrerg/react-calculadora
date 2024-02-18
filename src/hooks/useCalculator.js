import { useState } from "react";

export const useCalculator = () => {
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
    displayNumber === valueToSave
      ? setValueToOperate(valueToSave)
      : setValueToOperate(displayNumber);
    setValueToSave(0);
    setSymbol(operator);
  };

  const answer = () => {
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

  return {
    //Properties
    displayNumber,
    //Methods
    display,
    operation,
    answer,
    reset,
  };
};
