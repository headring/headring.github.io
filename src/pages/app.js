import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/layout";
import PrivateRoute from "../components/privateRoute";
import Profile from "../components/profile";
import Login from "../components/login";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <Layout>
    <Router>
      <GlobalStyle />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);

export default App;
