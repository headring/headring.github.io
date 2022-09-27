import React from "react";

import PrivateRoute from "../components/privateRoute";
import { Router } from "@reach/router";

import Layout from "../components/Layout";
import Profile from "../components/profile";
import Login from "../components/login";
import Write from "./write";
import ContentsPage from "./ContentsPage";
import MainPage from "./MainPage";
import PostListPage from "./PostListPage";

const App = () => (
  <Layout>
    <Router>
      <MainPage path="/" />
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
      <Write path="/write" />
      <ContentsPage path="/contents" />
      <PostListPage path="/post-list" />
    </Router>
  </Layout>
);

export default App;
