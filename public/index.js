import React from "react";
import ReactDOM from "react-dom";
import ErrorScreen from "../src/ErrorComponent";

const App = () => (
  <ErrorScreen error={503} description="Ocorreu um problema no servidor" />
);

ReactDOM.render(<App />, document.getElementById("root"));