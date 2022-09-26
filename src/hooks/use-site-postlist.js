import { useStaticQuery, graphql } from "gatsby";

export const usePostList = ({ category }) => {
  console.log("pageContext", category);
  const data = useStaticQuery(
    graphql`
      query ($category: String) {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { category: { eq: $category } } }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                category
              }
            }
          }
        }
      }
    `
  );
  return data;
};
