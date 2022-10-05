import React from "react";

import PrivateRoute from "../components/privateRoute";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import Layout from "../components/Layout";
import Profile from "../components/profile";
import Login from "../components/Login";
import Write from "./write";
import MainPage from "./MainPage";
import PostListPage from "./post-list";
import SearchResult from "./searchresult";
import NotFoundPage from "./404";
import ContentsPage from "./contents";

export const changeTheme = () => {
  return {
    type: "CHANGETHEME",
  };
};

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

const App = () => (
  <Provider store={store}>
    <Layout>
      <Router>
        <MainPage path="/" />
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/write" component={Write} />
        <Login path="/app/login" />
        <NotFoundPage path="/404" />
        <ContentsPage path="contents" />
        <SearchResult path="/searchresult" />
        <PostListPage path="/post-list" />
      </Router>
    </Layout>
  </Provider>
);

export default App;
