import React from "react";
import Layout from "../components/Layout";

const SearchResult = () => {
  let searchText = localStorage.getItem("searchText");

  return (
    <Layout>
      <div>hi</div>
      <div>{searchText}</div>
    </Layout>
  );
};

export default SearchResult;
