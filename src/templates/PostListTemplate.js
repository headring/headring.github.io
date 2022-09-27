import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const BoardPage = ({ data, location, pageContext, allData, children }) => {
  let edges = data?.allMarkdownRemark ? data?.allMarkdownRemark.edges : allData;

  if (data?.allMarkdownRemark) {
    edges = data.allMarkdownRemark.edges.map((data) => {
      const newPost = {
        id: data.node.id,
        title: data.node.frontmatter.title,
        category: data.node.frontmatter.category,
        date: data.node.frontmatter.date,
        imgPath: data.node.frontmatter.imgPath,
        contents: data.node.excerpt,
      };
      return newPost;
    });
  }

  return (
    <Layout>
      {children}
      <ul>
        {edges.map((edge) => {
          const { id, title, category } = edge;
          return <li key={id}>{category}</li>;
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default BoardPage;

export const PostListQuery = graphql`
  query ($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
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
          id
        }
      }
    }
  }
`;
