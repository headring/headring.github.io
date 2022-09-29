import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Contents from "../components/Contents";

type PostTemplateProps = {};

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props);

  return (
    <div>
      <Contents />
    </div>
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
