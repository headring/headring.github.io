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
