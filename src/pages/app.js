import React from "react";

import PrivateRoute from "../components/privateRoute";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import Profile from "../components/profile";
import Login from "../components/login";
import Write from "./write";
import MainPage from "./MainPage";
import PostListPage from "./post-list";

const App = () => (
  <Layout>
    <Router>
      <MainPage path="/" />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/write" component={Write} />
      <Login path="/app/login" />
      <PostListPage path="/post-list" />
    </Router>
  </Layout>
);

export default App;
