const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/post-list/" + node.frontmatter.category.replace(/\s/g, "-"),
      component: path.resolve("./src/templates/BoardTemplate/index.js"),
      context: { category: node.frontmatter.category },
    });
  });
};
