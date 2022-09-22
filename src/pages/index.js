import React from "react";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";

import MainPage from "./MainPage.tsx";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <MainPage />
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  );
};

export default IndexPage;
