import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import ContentsPage from "../pages/ContentsPage";
// import { PostPageItemType } from '../types/PostItem.types'
import { PostFrontmatterType } from "../types/PostItem.types";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

/////
const themeReducer = (state = localStorage.getItem("theme"), action: any) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};
const store = createStore(themeReducer);
/////

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]; // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    };
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
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
  console.log("data:", title);

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

export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};
