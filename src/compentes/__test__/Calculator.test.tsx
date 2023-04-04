import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";
import * as operations from "../../utils/operationMath";

jest.mock("../../utils/operationMath");

const { divid, generarNumero, mult, rest, sum } = operations;

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

it("spy for sum", () => {
  render(<Calculator />);

  let value1: any = generarNumero(1, 5) ?? 20;
  let valu2: any = generarNumero(1, 5) ?? 20;

  let inputN1: any = screen.getByTestId("n");
  let inputN2: any = screen.getByTestId("nn");
  let inputOper: any = screen.getByTestId("oper");
  let inputRes: any = screen.getByTestId("res");

  const spy = jest.spyOn(operations, "sum");

  expect(inputN1.value).toBe("0");
  expect(inputN2.value).toBe("0");
  expect(inputOper.value).toBe("suma");

  fireEvent.change(inputN1, { target: { value: value1 } });
  fireEvent.change(inputN2, { target: { value: valu2 } });
  fireEvent.change(inputOper, {
    target: { value: "suma" },
  });

  expect(inputN1.value).toBe(value1.toString());
  expect(inputN1.value).toBe(valu2.toString());
  expect(inputOper.value).toBe("suma");

  sum(parseFloat(inputN1.value), parseFloat(inputN2.value));

  const result = sum(parseFloat(inputN1.value), parseFloat(inputN2.value));

  fireEvent.change(inputRes, {
    target: { "data-value": result },
  });

  expect(inputRes["data-value"]).toBe(result);

  expect(spy).toHaveBeenCalled();
});
