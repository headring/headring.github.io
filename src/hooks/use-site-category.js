import { useStaticQuery, graphql } from "gatsby";

export const useCategory = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
            edges {
              node {
                id
              }
            }
          }
          totalCount
        }
      }
    `
  );
  return data.allMarkdownRemark;
};

// query CategoryQuery {
//   projects: allMarkdownRemark(
//     sort: { fields: frontmatter___date, order: DESC }
//   ) {
//     totalCount
//     nodes {
//       frontmatter {
//         category
//         title
//       }
//       id
//     }
//   }
//   contact: site {
//     siteMetadata {
//       title
//     }
//   }
// }
