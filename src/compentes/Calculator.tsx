import React, { useState } from "react";
import { sum, rest, mult, divid } from "../utils/operationMath";
import { Grid, TextField, Button, Typography } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    switch (operation) {
      case "sum":
        setResult(sum(number1, number2));
        break;
      case "rest":
        setResult(rest(number1, number2));
        break;
      case "mult":
        setResult(mult(number1, number2));
        break;
      case "divid":
        if (number2 === 0) setError("No se puede dividir entre 0");
        if (number2 !== 0) setResult(divid(number1, number2));
        break;
      default:
        console.log("no hay una operacion valida");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          value={operation}
          name="operation"
          select
          required
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          label="Operation"
          SelectProps={{ native: true }}
          fullWidth
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="sum" key="sum">
            Suma
          </option>
          <option value="rest" key="rest">
            Resta
          </option>
          <option value="mult" key="mult">
            Multiplicacion
          </option>
          <option value="divid" key="divid">
            Division
          </option>
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="number1"
          fullWidth
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="number2"
          fullWidth
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          startIcon={<CalculateIcon />}
          disableElevation
          size="large"
          sx={{ height: 55 }}
        >
          Realizar Operacion
        </Button>
      </Grid>
      <Grid item xs={12}>
        {error && <Typography>{error}</Typography>}
        {result && <Typography> El resultado es {result}</Typography>}
      </Grid>
    </Grid>
  );
}
