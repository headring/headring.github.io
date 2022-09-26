import React from "react";
import { Link, graphql } from "gatsby";

// import { usePostList } from "../hooks/use-site-postlist";
import Layout from "../components/Layout";

const BoardPage = ({ location, pageContext }) => {
  console.log(location, pageContext);

  return (
    <Layout>
      <ul>
        {/* 각 카테고리에 해당하는 포스트의 목록을 출력한다. */}
        {/* {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })} */}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default BoardPage;

// export const query = graphql(
//   `
//     query ($category: String) {
//       allMarkdownRemark(
//         limit: 2000
//         sort: { fields: [frontmatter___date], order: DESC }
//         filter: { frontmatter: { category: { eq: $category } } }
//       ) {
//         totalCount
//         edges {
//           node {
//             frontmatter {
//               title
//               category
//             }
//           }
//         }
//       }
//     }
//   `
// );
