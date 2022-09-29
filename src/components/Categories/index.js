import React from "react";
import { Link } from "gatsby";
import { Container } from "./styles";

const Categories = ({ data }) => {
  const postList = data.group;
  const totalCount = data.totalCount;

  return (
    <Container>
      <h1>Category</h1>
      <ul>
        <li>
          <Link to="/post-list">전체보기 ({totalCount})</Link>
        </li>
        {postList.map((post) => {
          const { id } = post.edges[0].node;
          return (
            <li key={id}>
              <Link to={"/post-list/" + post.fieldValue.replace(/\s/g, "-")}>
                {post.fieldValue} ({post.totalCount})
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Categories;
