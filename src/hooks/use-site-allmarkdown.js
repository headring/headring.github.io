import { useStaticQuery, graphql } from "gatsby";

export const useSitePostdata = () => {
  const data = useStaticQuery(
    graphql`
      query SitePostQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              excerpt(format: PLAIN)
              frontmatter {
                date
                title
                category
                imgPath {
                  childImageSharp {
                    fluid {
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark.edges;
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
