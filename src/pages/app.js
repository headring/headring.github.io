import React from "react";

import PrivateRoute from "../components/privateRoute";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import Profile from "../components/profile";
import Login from "../components/login";
import Write from "./write";
import ContentsPage from "./ContentsPage";
import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import MainPage from "./MainPage";

const App = () => (
  <Layout>
    <GlobalStyle />
    <Router>
      <MainPage path="/" />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Write path="/app/write" />
      <ContentsPage path="/app/contents" />
    </Router>
  </Layout>
);

export default App;
