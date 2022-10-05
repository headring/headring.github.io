import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const themeReducer = (state = window.localStorage.getItem("theme"), action) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";

    default:
      return state;
  }
};

const store = createStore(themeReducer);

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{element}</Provider>
    </ThemeProvider>
  );
};
