import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Container, Table, Thead, Tbody } from "./styles";
import { useCategory } from "../../hooks/use-site-category";
import Categories from "../../components/Categories";

const BoardPage = ({ data, location, pageContext, allData }) => {
  let categories = useCategory();
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
      <Container>
        <Categories data={categories} />
        <Table>
          <li>
            <Thead>
              <li>번호</li>
              <li></li>
              <li>분류</li>
              <li>제목</li>
              <li>날짜</li>
            </Thead>
          </li>
          {edges.map((edge, idx) => {
            const { id, imgPath, title, category, date } = edge;
            console.log("imgPath", imgPath);
            return (
              <li key={id}>
                <Tbody>
                  <li>{idx + 1}</li>
                  <li>
                    <img
                      src={imgPath.childImageSharp.fluid.originalImg}
                      alt=""
                    />
                  </li>
                  <li>{category}</li>
                  <li>{title}</li>
                  <li>{date}</li>
                </Tbody>
              </li>
            );
          })}
        </Table>
      </Container>
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
