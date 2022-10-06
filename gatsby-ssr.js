import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const isBrowser = typeof window !== "undefined";

const themeReducer = (
  state = isBrowser ? localStorage.getItem("theme") : "light",
  action
) => {
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
