import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/layout";
import PrivateRoute from "../components/privateRoute";
import Profile from "../components/profile";
import Login from "../components/login";
import GlobalStyle from "../styles/GlobalStyle";
import Write from "./write";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Write path="./write"></Write>
    </Router>
  </Layout>
);

export default App;
