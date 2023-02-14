import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Container, Content, Table, Thead, Tbody, Select } from "./styles";
import { useCategory } from "../../hooks/use-site-category";
import Categories from "../../components/Categories";
import Pagination from "../../components/Pagination";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const isBrowser = typeof window !== "undefined";

const themeReducer = (
  state = isBrowser ? localStorage.getItem("theme") : "light",
  action
) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};
const store = createStore(themeReducer);

const BoardPage = ({ data, location, pageContext, allData }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
        slug: data.node?.fields?.slug,
      };
      return newPost;
    });
  }

  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <Categories data={categories} />
          <Content>
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
              {edges.slice(offset, offset + limit).map((edge, idx) => {
                const { id, imgPath, title, category, date, slug } = edge;
                return (
                  <li key={id}>
                    <Link to={`/post${slug}`}>
                      <Tbody>
                        <li>{edges.length - idx}</li>
                        <li>
                          <img
                            src={imgPath.childImageSharp.fluid.originalImg}
                            alt={imgPath.childImageSharp.fluid.originalName}
                          />
                        </li>
                        <li>{category}</li>
                        <li>{title}</li>
                        <li>{date}</li>
                      </Tbody>
                    </Link>
                  </li>
                );
              })}
            </Table>
            <Select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
            <Pagination
              total={edges.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </Content>
        </Container>
      </Layout>
    </Provider>
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
          id
        }
      }
    }
  }
`;
