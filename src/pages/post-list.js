import React from "react";
import Categories from "../components/Categories";

import { useCategory } from "../hooks/use-site-category";
import { useSitePostdata } from "../hooks/use-site-allmarkdown";
import BoardPage from "../templates/BoardTemplate";

function PostListPage() {
  let categories = useCategory();
  let datas = useSitePostdata();

  return (
    <>
      <BoardPage allData={datas}>
        <Categories data={categories} />
      </BoardPage>
    </>
  );
}

export default PostListPage;
