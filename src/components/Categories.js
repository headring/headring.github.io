import React from "react";
import { Link } from "gatsby";

const Categories = ({ data }) => {
  const projects = data.projects.nodes;
  // const contact = data.contact.siteMetadata.contact;
  return (
    <div>
      <div>
        <h1>Categories123</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                to={
                  "/PostListPage/" +
                  project.frontmatter.category.replace(/\s/g, "-")
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
