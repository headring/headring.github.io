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

import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <Layout>
    <GlobalStyle />
    <Router>
      <MainPage path="/" />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Write path="/app/write" />
      <ContentsPage path="/app/contents" />
      <PostListPage path="/PostListPage" />
    </Router>
  </Layout>
);

export default App;
