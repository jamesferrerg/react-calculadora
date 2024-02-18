import { fireEvent, render, screen } from "@testing-library/react";
import { CalculatorApp } from "../src/CalculatorApp.jsx";
import * as calculator from "../src/hooks/useCalculator";

describe("<CalculatorApp/> component test", () => {

  const mockOperation = jest.fn();

  beforeEach(() => jest.clearAllMocks())

  test("should return the default values on display", () => {
    render(<CalculatorApp />);
    expect(screen.getByLabelText("display-number").textContent).toBe("0");
  });

  test("should display the selected number", () => {
    render(<CalculatorApp />);

    const selectedNumber = screen.getByLabelText("seven");
    fireEvent.click(selectedNumber);

    expect(screen.getByLabelText("display-number").textContent).toBe("7");
  });

  test("should call a matematical operation", () => {
  
    const spy = jest.spyOn(calculator, 'useCalculator').mockReturnValue({operation: mockOperation});
    render(<CalculatorApp />);

    const selectedOperation = screen.getByLabelText("addition");
    fireEvent.click(selectedOperation);

    expect(mockOperation).toHaveBeenCalled();
    expect(mockOperation).toHaveBeenCalledWith("addition");
    spy.mockRestore()
  });

  test("should call the answer", () => {
  
    const spy = jest.spyOn(calculator, 'useCalculator').mockReturnValue({answer: mockOperation});
    render(<CalculatorApp />);

    const selectedOperation = screen.getByLabelText("answer");
    fireEvent.click(selectedOperation);

    expect(mockOperation).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("should reset the display value", () => {
  
    render(<CalculatorApp />);
    
    const selectedNumber = screen.getByLabelText("seven");
    fireEvent.click(selectedNumber);
    
    expect(screen.getByLabelText("display-number").textContent).toBe("7");
    
    const selectedOperation = screen.getByLabelText("reset");
    fireEvent.click(selectedOperation);

    expect(screen.getByLabelText("display-number").textContent).toBe("0");
  });
});
