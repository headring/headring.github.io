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
  datas = datas.map((data:Blog)=> {
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

  return (
    <main>
      <ItemList datas={datas} />
    </main>
  );
};

export default MainPage;
