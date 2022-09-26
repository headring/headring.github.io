import { useStaticQuery, graphql } from "gatsby";

export const useCategory = () => {
  const data = useStaticQuery(
    graphql`
      query CategoryQuery {
        categories: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `
  );
  return data.categories.group;
};
