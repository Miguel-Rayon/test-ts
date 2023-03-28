import React from "react";
import Calculator from "./compentes/Calculator";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <Calculator data-testid="calculator" />
    </div>
  );
}

export default App;
