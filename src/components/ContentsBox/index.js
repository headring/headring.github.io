import React from "react";
import Contents from "../Contents";
// import ContentsIndex from "../ContentsIndex";

function ContentsBox({ globalTheme }) {
  return (
    <>
      <Contents globalTheme={globalTheme} />
      {/* <ContentsIndex /> */}
    </>
  );
}

export default ContentsBox;
