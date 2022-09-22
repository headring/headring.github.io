import React from "react";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import MainPage from "./MainPage.tsx";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";

const IndexPage = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Layout>
  );
};

export default IndexPage;
