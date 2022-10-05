import { useStaticQuery, graphql } from "gatsby";

export const useSearch = ({ searchText }) => {
  const winnow = '/\\' + searchText + '/'
  const data = useStaticQuery(
    graphql`
      query SearchQuery {
        allMarkdownRemark(filter: {html: {regex: "/\\pic/"}}) {
          edges {
            node {
              frontmatter {
                date
                title
              }
              html
            }
          }
        }
      }      
    `
  );
  return data.allMarkdownRemark.edges;
};
