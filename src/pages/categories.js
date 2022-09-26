import React from "react";
import { graphql, Link } from "gatsby";

const Categories = ({ data }) => {
  console.log(data);
  const projects = data.projects.nodes;
  // const contact = data.contact.siteMetadata.contact;
  return (
    <div>
      <div>
        <h1>Categories</h1>
        <ul>
          {/* group 배열에 그룹화된 카테고리 정보가 들어 있으므로 */}
          {/* Array.map()을 이용해서 리스트 아이템인 <li> 태그를 생성한다. */}
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                to={
                  "/article/" + project.frontmatter.category.replace(/\s/g, "-")
                }
              >
                {project.frontmatter.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

// graphql 태그를 이용해 페이지를 렌더링에 필요한 데이터를 쿼리한다.
export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          category
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        title
      }
    }
  }
`;
