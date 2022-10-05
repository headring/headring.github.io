import React from "react";
import { Link } from "gatsby";
import { Container } from "./styles";

const Categories = ({ data }) => {
  const postList = data.group;
  const totalCount = data.totalCount;

  return (
    <Container className="category">
      <h1>Category</h1>
      <ul>
        <li>
          <Link to="/post-list" activeClassName="active">
            전체보기 <span className="count">({totalCount})</span>
          </Link>
        </li>
        {postList.map((post) => {
          const { id } = post.edges[0].node;
          return (
            <li key={id}>
              <Link
                to={"/post-list/" + post.fieldValue.replace(/\s/g, "-")}
                activeClassName="active"
              >
                {post.fieldValue}
                <span className="count">({post.totalCount})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Categories;
