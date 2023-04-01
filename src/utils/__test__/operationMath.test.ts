import { sum, rest, mult, divid } from "../operationMath";

it("suma de numeros", () => {
  const number1 = 5;
  const number2 = 1;

  const result = sum(number1, number2);
  expect(result).toBe(6);
});

it("resta de numeros", () => {
  const number1 = 5;
  const number2 = 1;

  const result = rest(number1, number2);
  expect(result).toBe(4);
});

it("multiplicacion de numeros", () => {
  const number1 = 5;
  const number2 = 2;

  const result = mult(number1, number2);
  expect(result).toBe(10);
});

it("division de numeros", () => {
  const number1 = 5;
  const number2 = 1;

  const result = divid(number1, number2);
  expect(result).toBe(5);
});
