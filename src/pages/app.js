import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/layout";
import PrivateRoute from "../components/privateRoute";
import Profile from "../components/profile";
import Login from "../components/login";
import Post from "../components/post";
import ContentsPage from "./ContentsPage";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <Layout>
    <GlobalStyle />
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Post path="/app/post" />
      <ContentsPage path="/app/contents" />
    </Router>
  </Layout>
);

export default App;
