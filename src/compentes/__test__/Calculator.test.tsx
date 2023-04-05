import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";
import * as operations from "../../utils/operationMath";

jest.mock("../../utils/operationMath");

const { divid, generarNumero, mult, rest, sum } = operations;

let value1: number = 0;
let value2: number = 0;

let inputN1: any;
let inputN2: any;
let inputOper: any;
let inputRes: any;

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

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 1;

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "suma" } });

  expect(screen.getByTestId("res").textContent).not.toBe(
    `El resultado es:${sum(value1, value2)}`
  );
});

it("substract operation", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 1;

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "resta" } });

  expect(screen.getByTestId("res").textContent).not.toBe(
    `El resultado es:${sum(value1, value2)}`
  );
});

it("multiply operation", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 1;

  const number1 = screen.getByTestId("n");
  const number2 = screen.getByTestId("nn");
  const operation = screen.getByTestId("oper");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });
  fireEvent.change(operation, { target: { value: "multiplicacion" } });

  expect(screen.getByTestId("res").textContent).not.toBe(
    `El resultado es:${mult(value1, value2)}`
  );
});

it("divide operation", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 1;

  const operation = screen.getByTestId("oper");

  fireEvent.change(screen.getByTestId("n"), { target: { value: value1 } });
  fireEvent.change(screen.getByTestId("nn"), { target: { value: value2 } });
  fireEvent.change(operation, {
    target: { value: "division" },
  });

  expect(screen.getByTestId("res").textContent).not.toBe(
    `El resultado es:${divid(value1, value2)}`
  );
});

it("spy for sum", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 20;

  inputN1 = screen.getByTestId("n");
  inputN2 = screen.getByTestId("nn");
  inputOper = screen.getByTestId("oper");
  inputRes = screen.getByTestId("res");

  const spy = jest.spyOn(operations, "sum");

  expect(inputN1.value).toBe("0");
  expect(inputN2.value).toBe("0");
  expect(inputOper.value).toBe("suma");

  fireEvent.change(inputN1, { target: { value: value1 } });
  fireEvent.change(inputN2, { target: { value: value2 } });
  fireEvent.change(inputOper, {
    target: { value: "suma" },
  });

  expect(inputN1.value).toBe(value1.toString());
  expect(inputN1.value).toBe(value2.toString());
  expect(inputOper.value).toBe("suma");

  sum(parseFloat(inputN1.value), parseFloat(inputN2.value));

  const result = sum(parseFloat(inputN1.value), parseFloat(inputN2.value));

  fireEvent.change(inputRes, {
    target: { "data-value": result },
  });

  expect(inputRes["data-value"]).toBe(result);

  expect(spy).toHaveBeenCalled();
});

it("spy for rest", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 20;

  inputN1 = screen.getByTestId("n");
  inputN2 = screen.getByTestId("nn");
  inputOper = screen.getByTestId("oper");
  inputRes = screen.getByTestId("res");

  const spy = jest.spyOn(operations, "rest");

  expect(inputN1.value).toBe("0");
  expect(inputN2.value).toBe("0");
  expect(inputOper.value).toBe("suma");

  fireEvent.change(inputN1, { target: { value: value1 } });
  fireEvent.change(inputN2, { target: { value: value2 } });
  fireEvent.change(inputOper, {
    target: { value: "resta" },
  });

  expect(inputN1.value).toBe(value1.toString());
  expect(inputN1.value).toBe(value2.toString());
  expect(inputOper.value).toBe("resta");

  rest(parseFloat(inputN1.value), parseFloat(inputN2.value));

  const result = rest(parseFloat(inputN1.value), parseFloat(inputN2.value));

  fireEvent.change(inputRes, {
    target: { "data-value": result },
  });

  expect(inputRes["data-value"]).toBe(result);

  expect(spy).toHaveBeenCalled();
});

it("spy for mult", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 20;

  inputN1 = screen.getByTestId("n");
  inputN2 = screen.getByTestId("nn");
  inputOper = screen.getByTestId("oper");
  inputRes = screen.getByTestId("res");

  const spy = jest.spyOn(operations, "mult");

  expect(inputN1.value).toBe("0");
  expect(inputN2.value).toBe("0");
  expect(inputOper.value).toBe("suma");

  fireEvent.change(inputN1, { target: { value: value1 } });
  fireEvent.change(inputN2, { target: { value: value2 } });
  fireEvent.change(inputOper, {
    target: { value: "multiplicacion" },
  });

  expect(inputN1.value).toBe(value1.toString());
  expect(inputN1.value).toBe(value2.toString());
  expect(inputOper.value).toBe("multiplicacion");

  mult(parseFloat(inputN1.value), parseFloat(inputN2.value));

  const result = mult(parseFloat(inputN1.value), parseFloat(inputN2.value));

  fireEvent.change(inputRes, {
    target: { "data-value": result },
  });

  expect(inputRes["data-value"]).toBe(result);

  expect(spy).toHaveBeenCalled();
});

it("spy for divid", () => {
  render(<Calculator />);

  value1 = generarNumero(1, 5) ?? 20;
  value2 = generarNumero(1, 5) ?? 20;

  inputN1 = screen.getByTestId("n");
  inputN2 = screen.getByTestId("nn");
  inputOper = screen.getByTestId("oper");
  inputRes = screen.getByTestId("res");

  const spy = jest.spyOn(operations, "divid");

  expect(inputN1.value).toBe("0");
  expect(inputN2.value).toBe("0");
  expect(inputOper.value).toBe("suma");

  fireEvent.change(inputN1, { target: { value: value1 } });
  fireEvent.change(inputN2, { target: { value: value2 } });
  fireEvent.change(inputOper, {
    target: { value: "division" },
  });

  expect(inputN1.value).toBe(value1.toString());
  expect(inputN1.value).toBe(value2.toString());
  expect(inputOper.value).toBe("division");

  divid(parseFloat(inputN1.value), parseFloat(inputN2.value));

  const result = divid(parseFloat(inputN1.value), parseFloat(inputN2.value));

  fireEvent.change(inputRes, {
    target: { "data-value": result },
  });

  expect(inputRes["data-value"]).toBe(result);

  expect(spy).toHaveBeenCalled();
});
