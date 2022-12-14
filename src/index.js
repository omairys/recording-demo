import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import "./index.css";
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
