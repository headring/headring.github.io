import React from "react";

import ItemList from "../components/ItemList";

import { useSitePostdata } from "../hooks/use-site-allmarkdown";
import { Post } from "../components/Item";

export interface Blog{
  node: {
    frontmatter: Post,
    excerpt: string,
    id: string
  }
}

const MainPage = () => {
  let datas = useSitePostdata();

  return (
    <main>
      <ItemList datas={datas} />
    </main>
  );
};

export default MainPage;
