import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import PrivateRoute from "../components/privateRoute";
import Profile from "../components/profile";
import Login from "../components/login";

import GlobalStyle from "../styles/GlobalStyle";
import Write from "./write";
import ContentsPage from "./ContentsPage";

const App = () => (
  <Layout>
    <GlobalStyle />
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Write path="/app/write" />
      <ContentsPage path="/app/contents" />
    </Router>
  </Layout>
);

export default App;
