import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";
import {
  sum,
  rest,
  mult,
  divid,
  generarNumero,
} from "../../utils/operationMath";

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe("Calculator", () => {
  test("renders correctly", () => {
    render(<Calculator />);
  });
});

it("render all element the screen", () => {
  render(<Calculator />);

  const operation = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n");
  const number2Input = screen.getByTestId("nn");

  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(operation).toBeInTheDocument();
});

it("sum operation", () => {
  render(<Calculator />);

  let value1: number = generarNumero(1, 5);
  let value2: number = generarNumero(1, 5);

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "suma" } });

  expect(screen.getByTestId("res").textContent).toBe(
    `El resultado es:${sum(value1, value2)}`
  );
});

it("substract operation", () => {
  render(<Calculator />);

  let value1: number = generarNumero(1, 5);
  let value2: number = generarNumero(1, 5);

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "resta" } });

  expect(screen.getByTestId("res").textContent).toBe(
    `El resultado es:${rest(value1, value2)}`
  );
});

it("multiply operation", () => {
  render(<Calculator />);

  let value1: number = generarNumero(1, 5);
  let value2: number = generarNumero(1, 5);

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "multiplicacion" } });

  expect(screen.getByTestId("res").textContent).toBe(
    `El resultado es:${mult(value1, value2)}`
  );
});

it("divide operation", () => {
  render(<Calculator />);

  let value1: number = generarNumero(1, 5);
  let value2: number = generarNumero(1, 5);

  const operation = screen.getByTestId("oper");

  fireEvent.change(screen.getByTestId("n"), { target: { value: value1 } });
  fireEvent.change(screen.getByTestId("nn"), { target: { value: value2 } });
  fireEvent.change(operation, {
    target: { value: "division" },
  });

  expect(screen.getByTestId("res").textContent).toBe(
    `El resultado es:${divid(value1, value2)}`
  );
});

it("divide by 0 operation", () => {
  render(<Calculator />);

  const value: number = generarNumero(1, 5);

  fireEvent.change(screen.getByTestId("n"), {
    target: { value: value },
  });

  expect(() => {
    divid(value, 0);
  }).toThrowError("no se puede dividir entre 0 no sea imbecilillo :v");
});

it("spy de suma", () => {
  const handleSubmitSpy = jest.spyOn(Calculator.prototype, "handleSubmit");
  const { getByTestId } = render(<Calculator />);
  const number1Input = getByTestId("n");
  const number2Input = getByTestId("nn");
  const operationSelect = getByTestId("oper");

  fireEvent.change(number1Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).not.toHaveBeenCalled();

  fireEvent.change(number2Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).toHaveBeenCalled();

  fireEvent.change(operationSelect, { target: { value: "suma" } });
  expect(handleSubmitSpy).toHaveBeenCalled();
});

it("spy de resta", () => {
  const handleSubmitSpy = jest.spyOn(Calculator.prototype, "handleSubmit");
  const { getByTestId } = render(<Calculator />);
  const number1Input = getByTestId("n");
  const number2Input = getByTestId("nn");
  const operationSelect = getByTestId("oper");

  fireEvent.change(number1Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).not.toHaveBeenCalled();

  fireEvent.change(number2Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).toHaveBeenCalled();

  fireEvent.change(operationSelect, { target: { value: "resta" } });
  expect(handleSubmitSpy).toHaveBeenCalled();
});

it("spy de multiplicacion", () => {
  const handleSubmitSpy = jest.spyOn(Calculator.prototype, "handleSubmit");
  const { getByTestId } = render(<Calculator />);
  const number1Input = getByTestId("n");
  const number2Input = getByTestId("nn");
  const operationSelect = getByTestId("oper");

  fireEvent.change(number1Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).not.toHaveBeenCalled();

  fireEvent.change(number2Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).toHaveBeenCalled();

  fireEvent.change(operationSelect, { target: { value: "multiplicacion" } });
  expect(handleSubmitSpy).toHaveBeenCalled();
});

it("spy de division", () => {
  const handleSubmitSpy = jest.spyOn(Calculator.prototype, "handleSubmit");
  const { getByTestId } = render(<Calculator />);
  const number1Input = getByTestId("n");
  const number2Input = getByTestId("nn");
  const operationSelect = getByTestId("oper");

  fireEvent.change(number1Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).not.toHaveBeenCalled();

  fireEvent.change(number2Input, { target: { value: generarNumero(1, 5) } });
  expect(handleSubmitSpy).toHaveBeenCalled();

  fireEvent.change(operationSelect, { target: { value: "division" } });
  expect(handleSubmitSpy).toHaveBeenCalled();
});
