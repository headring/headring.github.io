import React from "react";
import Layout from "../Layout";
import { useSitePostdata } from "../../hooks/use-site-allmarkdown";
import ItemList from "../ItemList";

// el.content.match(regex)
const Search = () => {
  const isBrowser = typeof window !== "undefined";
  let searchText =
    isBrowser && window.localStorage.getItem("searchText").toLowerCase();
  let datas = useSitePostdata().filter((el) => {
    return (
      el.contents.toLowerCase().includes(searchText) ||
      el.title.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <Layout>
        <ItemList datas={datas} />
      </Layout>
    </>
  );
};

export default Search;
