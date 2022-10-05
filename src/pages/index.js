import React from "react";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
// import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";

import MainPage from "./MainPage.tsx";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import App from "./app";

//
const { graphql } = require("@octokit/graphql");
//

// const themeReducer = (state = localStorage.getItem("theme")) => {
//   return state;
// };

// const store = createStore(themeReducer);

////////
async function test(query) {
  await graphql(query, {
    headers: {
      authorization: `token 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`,
    },
  }).then((res) => console.log(query, res));
}
const IndexPage = () => {
  let commentsQuery = `{
    repository(owner: "callmejeje", name: "oreum-comments") {
      issues(first: 3) {
        edges {
          node {
            title

          }
        }
      }
    }
  }`;
  console.log(test(commentsQuery));
  ////////

  return (
    // <Provider store={store}>
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
    // </Provider>
  );
};

export default IndexPage;
