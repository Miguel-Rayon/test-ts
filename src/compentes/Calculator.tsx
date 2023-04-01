import React, { useEffect, useState } from "react";
import { sum, rest, mult, divid } from "../utils/operationMath";
import { Grid, Typography } from "@mui/material";

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    switch (operation) {
      case "suma":
        setResult(sum(number1, number2));
        break;
      case "resta":
        setResult(rest(number1, number2));
        break;
      case "multiplicacion":
        setResult(mult(number1, number2));
        break;
      case "division":
        if (number2 === 0) setError("No se puede dividir entre 0");
        if (number2 !== 0) setResult(divid(number1, number2));
        break;
      default:
        console.log("no hay una operacion valida");
    }
  };

  useEffect(() => {
    if (operation && number1 !== 0 && number2 !== 0) handleSubmit();
  }, [operation, number1, number2]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <select
          value={operation}
          name="operation"
          data-testid="oper"
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="suma" key="sum">
            Suma
          </option>
          <option value="resta" key="rest">
            Resta
          </option>
          <option value="multiplicacion" key="mult">
            Multiplicacion
          </option>
          <option value="division" key="divid">
            Division
          </option>
        </select>
      </Grid>
      <Grid item xs={4}>
        <input
          name="number1"
          data-testid="n"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
      </Grid>
      <Grid item xs={4}>
        <input
          name="number2"
          data-testid="nn"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        {error && <Typography>{error}</Typography>}
      </Grid>
      <div data-testid="res">{result && "El resultado es:" + result}</div>
    </Grid>
  );
}
