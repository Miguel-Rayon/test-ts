import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../Calculator";

test("sum operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  expect(operationSelect).toBeInTheDocument();
  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test("rest operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  expect(operationSelect).toBeInTheDocument();
  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test("mult operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  expect(operationSelect).toBeInTheDocument();
  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

test("divid operation", () => {
  const { getByText } = render(<Calculator />);
  const operationSelect = screen.getByTestId("oper");
  const number1Input = screen.getByTestId("n1");
  const number2Input = screen.getByTestId("n2");
  const calculateButton = screen.getByTestId("cal");

  expect(operationSelect).toBeInTheDocument();
  expect(number1Input).toBeInTheDocument();
  expect(number2Input).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});
