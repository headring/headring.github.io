import React from "react";
import { Aside, Index } from "./styles";
import ReactMarkdown from "react-markdown";

function ContentsIndex() {
  return (
    <Aside>
      <Index>
        <ReactMarkdown>{`- 재귀란?\n  - 상향식 접근법\n  - 하향식 접근법\n- Reference`}</ReactMarkdown>
      </Index>
    </Aside>
  );
}

export default ContentsIndex;
