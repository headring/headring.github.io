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
              fields {
                slug
              }
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

  let datas = data.allMarkdownRemark.edges.map((data) => {
    const newPost = {
      id: data.node.id,
      title: data.node.frontmatter.title,
      category: data.node.frontmatter.category,
      date: data.node.frontmatter.date,
      imgPath: data.node.frontmatter.imgPath,
      contents: data.node.excerpt,
      slug: data.node.fields.slug,
    };
    return newPost;
  });
  return datas;
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
