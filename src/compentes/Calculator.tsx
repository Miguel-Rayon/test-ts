import React, { useEffect, useState } from "react";
import { sum, rest, mult, divid } from "../utils/operationMath";
import { Grid, Typography } from "@mui/material";

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("suma");
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
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          value={operation}
          name="operation"
          data-testid="oper"
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#eee",
          }}
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
      <Grid item xs={6}>
        <input
          name="number1"
          data-testid="n"
          value={number1}
          style={{
            width: "90%",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
            fontFamily: "Poppins, sans-serif",
          }}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
      </Grid>
      <Grid item xs={6}>
        <input
          name="number2"
          data-testid="nn"
          value={number2}
          style={{
            width: "90%",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
            fontFamily: "Poppins, sans-serif",
          }}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        {error && (
          <Typography variant="h5" style={{ fontSize: 20, fontWeight: 400 }}>
            {error}
          </Typography>
        )}
      </Grid>
      <div
        data-testid="res"
        data-value={result ? result : 0}
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: 400,
          justifyContent: "center",
        }}
      >
        {result && "El resultado es:" + result}
      </div>
    </Grid>
  );
}
