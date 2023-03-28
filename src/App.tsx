import React from "react";
import Calculator from "./compentes/Calculator";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid style={{ padding: "30px" }} role="calculator">
      <Calculator />
    </Grid>
  );
}

export default App;
