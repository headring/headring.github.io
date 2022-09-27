import { useStaticQuery, graphql } from "gatsby";

export const useCategory = () => {
  const data = useStaticQuery(
    graphql`
      query CategoryQuery {
        projects: allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            frontmatter {
              category
              title
            }
            id
          }
        }
        contact: site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return data;
};
