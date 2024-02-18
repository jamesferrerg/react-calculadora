import { renderHook, act } from "@testing-library/react";
import { useCalculator } from "../../src/hooks/useCalculator";

describe("Prueba del hook useCalculator", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCalculator());
    const { displayNumber, display, operation, answer, reset } = result.current;

    expect(displayNumber).toBe(0);
    expect(display).toEqual(expect.any(Function));
    expect(operation).toEqual(expect.any(Function));
    expect(answer).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should display the selected number", () => {
    const { result } = renderHook(() => useCalculator());
    const { display } = result.current;

    act(() => {
      display(5);
    });

    expect(result.current.displayNumber).toBe(5);

  });

  test("should perform a mathematical operation (addition)", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => { result.current.display(5) });
    act(() => { result.current.operation('addition') });
    act(() => { result.current.display(3) });
    act(() => { result.current.answer() });

    expect(result.current.displayNumber).toBe(8);
  });

  test("should reset the value", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => { result.current.display(5) });
    act(() => { result.current.reset() });

    expect(result.current.displayNumber).toBe(0);
  });
});
