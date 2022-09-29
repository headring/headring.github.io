import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import { useSitePostdata } from "../hooks/use-site-allmarkdown";
import { Post } from "../components/Item";
import ItemList from "../components/ItemList";

const SearchResult = () => {
  let searchText = localStorage.getItem('searchText');
  let datas = useSitePostdata();
  datas = datas.map((data)=> {
    const newPost = {
      id :data.node.id,
      title:data.node.frontmatter.title,
      category:data.node.frontmatter.category,
      date:data.node.frontmatter.date,
      imgPath:data.node.frontmatter.imgPath,
      contents:data.node.excerpt
    }
    return newPost
  });

  const MyQuery =  `{
    allMarkdownRemark(filter: {html: {regex: "/\\pic/"}}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          html
        }
      }
    }
  }`


  return (
    <Layout>
      <div>hi</div>
      <div>{searchText}</div>
      <ItemList datas={datas} />
    </Layout>
  );
};

export default SearchResult;
