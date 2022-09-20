import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                title
              }
            }
          }
        }
      }
    `
  );
  return data;
};

// graphql`
// query allMarkdownRemark {
//   nodes {
//     excerpt
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }
// `
