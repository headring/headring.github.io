import React from "react";
import { graphql } from "gatsby";
import ContentsPage from "../pages/contents";
import { PostFrontmatterType } from "../types/PostItem.types";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const isBrowser = typeof window !== "undefined";
const themeReducer = (
  state = isBrowser ? localStorage.getItem("theme") : "light",
  action
) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};
const store = createStore(themeReducer);

const PostTemplate = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0];

  return (
    <Provider store={store}>
      <Layout>
        <ContentsPage
          globalTheme={"light"}
          title={title}
          date={date}
          categories={categories}
          html={html}
        />
      </Layout>
    </Provider>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;
