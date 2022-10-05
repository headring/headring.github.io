import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
// const React = require("react")
// const { Provider } = require("react-redux")

const themeReducer = (state = localStorage.getItem("theme"), action) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";

    default:
      return state;
  }
};

const store = createStore(themeReducer);

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
