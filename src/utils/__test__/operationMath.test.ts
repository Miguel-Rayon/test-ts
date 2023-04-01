import { sum, rest, mult, divid } from "../operationMath";

it("suma de numeros", () => {
  const number1 = Math.random() * 99 + 1;
  const number2 = Math.random() * 99 + 1;

  const result = sum(number1, number2);
  expect(result).toBe(number1 + number2);
});

it("resta de numeros", () => {
  const number1 = Math.random() * 99 + 1;
  const number2 = Math.random() * 99 + 1;

  const result = rest(number1, number2);
  expect(result).toBe(number1 - number2);
});

it("multiplicacion de numeros", () => {
  const number1 = Math.random() * 99 + 1;
  const number2 = Math.random() * 99 + 1;

  const result = mult(number1, number2);
  expect(result).toBe(number1 * number2);
});

it("division de numeros", () => {
  const number1 = Math.random() * 99 + 1;
  const number2 = Math.random() * 99 + 1;

  const result = divid(number1, number2);
  expect(result).toBe(number1 / number2);
});
