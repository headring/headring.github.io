import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
