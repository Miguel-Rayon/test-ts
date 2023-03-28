import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";

test("sum operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  fireEvent.change(operationSelect, { target: { value: "sum" } });
  fireEvent.change(number1Input, { target: { value: "2" } });
  fireEvent.change(number2Input, { target: { value: "3" } });
  fireEvent.click(calculateButton);

  const result = getByText("El resultado es 5");
  expect(result).toBeInTheDocument();
});

test("rest operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  fireEvent.change(operationSelect, { target: { value: "rest" } });
  fireEvent.change(number1Input, { target: { value: "6" } });
  fireEvent.change(number2Input, { target: { value: "2" } });
  fireEvent.click(calculateButton);

  const result = getByText("El resultado es 4");
  expect(result).toBeInTheDocument();
});

test("mult operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  fireEvent.change(operationSelect, { target: { value: "mult" } });
  fireEvent.change(number1Input, { target: { value: "5" } });
  fireEvent.change(number2Input, { target: { value: "3" } });
  fireEvent.click(calculateButton);

  const result = getByText("El resultado es 15");
  expect(result).toBeInTheDocument();
});

test("divid operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  fireEvent.change(operationSelect, { target: { value: "divid" } });
  fireEvent.change(number1Input, { target: { value: "8" } });
  fireEvent.change(number2Input, { target: { value: "2" } });
  fireEvent.click(calculateButton);

  const result = getByText("El resultado es 4");
  expect(result).toBeInTheDocument();

  fireEvent.change(number2Input, { target: { value: "0" } });
  fireEvent.click(calculateButton);

  const errorMessage = getByText("No se puede dividir entre 0");
  expect(errorMessage).toBeInTheDocument();
});
