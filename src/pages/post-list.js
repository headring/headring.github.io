import React from "react";
import Categories from "../components/Categories";

import { useCategory } from "../hooks/use-site-category";
import { useSitePostdata } from "../hooks/use-site-allmarkdown";
import BoardPage from "../templates/BoardTemplate";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

/////
const isBrowser = typeof window !== "undefined";
const themeReducer = (
  state = isBrowser ? localStorage.getItem("theme") : "light",
  action
) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};
const store = createStore(themeReducer);
/////

function PostListPage() {
  let categories = useCategory();
  let datas = useSitePostdata();

  return (
    <Provider store={store}>
      <BoardPage allData={datas}>
        <Categories data={categories} />
      </BoardPage>
    </Provider>
  );
}

export default PostListPage;
