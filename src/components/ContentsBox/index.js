import React from "react";
import Contents from "../Contents";

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
    </>
  );
}

export default ContentsBox;
