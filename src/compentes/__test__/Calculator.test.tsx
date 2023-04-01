import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";
import { sum, rest, mult, divid } from "../../utils/operationMath";

it("render all element the screen", () => {
  render(<Calculator />);

  const operation = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(operation).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

it("sum operation", () => {
  render(<Calculator />);

  let value1: number = Math.random() * 99 + 1;
  let value2: number = Math.random() * 99 + 1;

  const number1 = screen.getByTestId("n1");
  const number2 = screen.getByTestId("n2");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });

  expect(screen.getByTestId("res").textContent).toBe(
    "El resultado es" + sum(value1, value2)
  );
});

it("substract operation", () => {
  render(<Calculator />);

  let value1: number = Math.random() * 99 + 1;
  let value2: number = Math.random() * 99 + 1;

  const number1 = screen.getByTestId("n1");
  const number2 = screen.getByTestId("n2");

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });

  expect(screen.getByTestId("res").textContent).toBe(
    "El resultado es" + rest(value1, value2)
  );
});

it("multiply operation", () => {
  render(<Calculator />);

  let value1: number = Math.random() * 99 + 1;
  let value2: number = Math.random() * 99 + 1;

  const number1 = screen.getByTestId("n1") as HTMLInputElement;
  const number2 = screen.getByTestId("n2") as HTMLInputElement;

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });

  expect(screen.getByTestId("res").textContent).toBe(
    "El resultado es" + mult(value1, value2)
  );
});

it("divide operation", () => {
  render(<Calculator />);

  let value1: number = Math.random() * 99 + 1;
  let value2: number = Math.random() * 99 + 1;

  const number1 = screen.getByTestId("n1") as HTMLInputElement;
  const number2 = screen.getByTestId("n2") as HTMLInputElement;

  fireEvent.change(number1, { target: { value: value1 } });
  fireEvent.change(number2, { target: { value: value2 } });

  expect(screen.getByTestId("res").textContent).toBe(
    "El resultado es" + divid(value1, value2)
  );
});

it("divide by 0 operation", () => {
  render(<Calculator />);

  const value: number = Math.random() * 99 + 1;

  fireEvent.change(screen.getByTestId("n1") as HTMLInputElement, {
    target: { value: value },
  });

  expect(() => {
    divid(value, 0);
  }).toThrowError("no se puede dividir entre 0 no sea imbecilillo :v");
});
