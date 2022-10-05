import React from "react";
import { Link } from "gatsby";
import { isLoggedIn } from "../services/auth";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import GlobalStyle from "../styles/GlobalStyle";
import App from "./app";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <p>
        {isLoggedIn() && (
          <>
            You are logged in, so check your
            <Link to="/app/profile">profile</Link>
          </>
        )}
      </p>
    </ThemeProvider>
  );
};

export default IndexPage;
