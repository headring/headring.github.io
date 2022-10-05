import React from "react";
import Contents from "../Contents";
// import ContentsIndex from "../ContentsIndex";

function ContentsBox({ globalTheme, title, date, categories, html }) {
  return (
    <>
      <Contents
        globalTheme={globalTheme}
        title={title}
        date={date}
        categories={categories}
        html={html}
      />
      {/* <ContentsIndex /> */}
    </>
  );
}

export default ContentsBox;
