import React from "react";
import Layout from "../components/Layout";


const SearchResult = () => {
  let searchText = localStorage.getItem('searchText');
  



  return (
    <>
      <Layout>
        <div>hi</div>
      </Layout>
    </>
  );
};

export default SearchResult;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`