import { fireEvent, render, screen } from "@testing-library/react";

import App from "../../App";
import * as operations from "../../utils/operationMath";
import Calculator from "../Calculator";

jest.mock("../../utils/operationMath");

const {
  divid,
  getRandomCharacter,
  getRandomFloat,
  getRandomInt,
  mult,
  rest,
  sum,
} = operations;

it("all in screen", () => {
  render(<App />);

  const calculator = screen.getByTestId("calculator");

  const a = screen.getByTestId("n");
  const b = screen.getByTestId("nn");
  const result = screen.getByTestId("result");

  expect(a).toBeInTheDocument();
  expect(b).toBeInTheDocument();
  expect(result).toBeInTheDocument();
  expect(calculator).toBeInTheDocument();
});

let valueA: number;
let valueB: number;

let wordA: string;
let wordB: string;

let inputA: any;
let inputB: any;
let inputOperator: any;
let inputResult: any;

describe("with decimals", () => {
  describe("successfully", () => {
    beforeEach(() => {
      valueA = getRandomFloat(9) + 1;
      valueB = getRandomFloat(9) + 1;
    });

    it("render sum", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "suma" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${sum(valueA, valueB)}`
      );
    });

    it("render rest", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "resta" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${rest(valueA, valueB)}`
      );
    });

    it("render mult", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "multiplicacion" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${mult(valueA, valueB)}`
      );
    });

    it("render divid", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "division" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${divid(valueA, valueB)}`
      );
    });
  });

  describe("errors", () => {
    beforeEach(() => {
      valueA = getRandomFloat(9);
      valueB = 0;
    });

    it("render divid by 0", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "divid" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${divid(valueA, valueB)}`
      );
    });
  });
});

export function forEach(items: Array<any>, callback: any) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe("Calculator Tests", () => {
  describe.only("renders", () => {
    beforeEach(() => {
      render(<Calculator />);
    });

    it("Check left input is in the document", () => {
      expect(screen.getByTestId("n")).toBeInTheDocument();
    });

    it("Check right input is in the document", () => {
      expect(screen.getByTestId("nn")).toBeInTheDocument();
    });

    it("Check operator select is in the document", () => {
      expect(screen.getByTestId("oper")).toBeInTheDocument();
    });

    it("Check if result is in the document", () => {
      expect(screen.getByTestId("res")).toBeInTheDocument();
    });
  });
});

describe("with integers", () => {
  describe("successfully", () => {
    let spy = jest.spyOn(operations, "operation");

    beforeEach(() => {
      operations.getRandomInt.mockReturnValue(Math.floor(Math.random() * 10));

      valueA = operations.getRandomInt(9);
      valueB = operations.getRandomInt(9) + 1;

      operations.operation.mockReturnValue(valueA + valueB);

      render(<Calculator />);

      inputA = screen.getByTestId("n");
      inputB = screen.getByTestId("nn");

      fireEvent.change(inputA, { target: { value: valueA } });
      fireEvent.change(inputB, { target: { value: valueB } });

      inputOperator = screen.getByTestId("oper");
      inputResult = screen.getByTestId("res");
    });

    it.only("renders sum", () => {
      expect(inputOperator.value).toBe("suma");

      fireEvent.change(inputOperator, {
        target: { value: "suma" },
      });

      expect(inputA.value).toBe(valueA.toString());
      expect(inputB.value).toBe(valueB.toString());
      expect(inputOperator.value).toBe("suma");

      fireEvent.change(inputResult, {
        target: {
          "data-value": parseFloat(inputA.value) + parseFloat(inputB.value),
        },
      });

      expect(inputResult["data-value"]).toBe(
        parseFloat(inputA.value) + parseFloat(inputB.value)
      );
    });

    it("renders rest", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("oper"), {
        target: { value: "rest" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${rest(valueA, valueB)}`
      );
    });

    it("renders mult", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "multiplicaion" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${mult(valueA, valueB)}`
      );
    });

    it("renders divid", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "division" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${divid(valueA, valueB)}`
      );
    });
  });

  describe("errors", () => {
    beforeEach(() => {
      valueA = getRandomInt(9);
      valueB = 0;
    });

    it("render divid by 0", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("n"), { target: { value: valueA } });
      fireEvent.change(screen.getByTestId("nn"), { target: { value: valueB } });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "division" },
      });

      expect(screen.getByTestId("result").textContent).toBe(
        `El resultado es: ${divid(valueA, valueB)}`
      );
    });
  });
});

describe("with alphanumeric", () => {
  beforeEach(() => {
    wordA = getRandomCharacter(9);
    wordB = getRandomCharacter(9);
  });

  it("renders sum", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("n"), { target: { value: wordA } });
    fireEvent.change(screen.getByTestId("nn"), { target: { value: wordB } });
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "sum" },
    });

    expect(screen.getByTestId("result").textContent).toBe(
      `El resultado es: ${sum(wordA, wordB)}`
    );
  });

  it("renders rest", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("n"), { target: { value: wordA } });
    fireEvent.change(screen.getByTestId("nn"), { target: { value: wordB } });
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "rest" },
    });

    expect(screen.getByTestId("result").textContent).toBe(
      `El resultado es: ${rest(wordA, wordB)}`
    );
  });

  it("renders mult", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("n"), { target: { value: wordA } });
    fireEvent.change(screen.getByTestId("nn"), { target: { value: wordB } });
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "mult" },
    });

    expect(screen.getByTestId("result").textContent).toBe(
      `El resultado es: ${mult(wordA, wordB)}`
    );
  });

  it("renders divid", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("n"), { target: { value: wordA } });
    fireEvent.change(screen.getByTestId("nn"), { target: { value: wordB } });
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "divid" },
    });

    expect(screen.getByTestId("result").textContent).toBe(
      `El resultado es: ${divid(wordA, wordB)}`
    );
  });
});
