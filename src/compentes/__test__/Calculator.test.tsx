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

  const sumSpy = jest.spyOn(operation, "suma");
  expect(sumSpy).toHaveBeenCalledWith(value1, value2);

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

  const restaSpy = jest.spyOn(operation, "resta");
  expect(restaSpy).toHaveBeenCalledWith(value1, value2);

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

  const multiplicacionSpy = jest.spyOn(operation, "multiplicacion");
  expect(multiplicacionSpy).toHaveBeenCalledWith(value1, value2);

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

  const divisionSpy = jest.spyOn(operation, "division");
  expect(divisionSpy).toHaveBeenCalledWith(value1, value2);

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
