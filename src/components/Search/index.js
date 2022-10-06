import React from "react";
import Layout from "../Layout";
import { useSitePostdata } from "../../hooks/use-site-allmarkdown";
import ItemList from "../ItemList";

const isBrowser = typeof window !== "undefined";

  // if(isBrowser){}

const Search = () => {
    let searchText = window.localStorage.getItem("searchText").toLowerCase();
    let datas = useSitePostdata().filter((el) => {
      return (
        el.contents.toLowerCase().includes(searchText) ||
        el.title.toLowerCase().includes(searchText)
      );
    });
    return (
      <Layout>
        <ItemList datas={datas} />
      </Layout>
    );
};

export default Search;
