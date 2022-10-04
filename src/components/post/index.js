import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { PageWrapper, HiddenForm, Button } from "./style";
import downloadTxtFile from "./downloadTxtFile";

const mkdStr = `
---
title: "title for your post"
date: "2022-09-29"
category: "TIL"
imgPath: "../images/gatsby-icon.png"
---

**FROM HERE, WRITE CONTENTS USING MARKDOWN SYNTAX
`;

const Post = () => {
  const [value, setValue] = useState(mkdStr);
  return (
    <>
      <PageWrapper>
        <div data-color-mode="dark">
            <MDEditor
              className="md-editor"
              height={972}
              value={value}
              onChange={setValue}
            />
            <div className="button__rows">
              <Button onClick={e=> window.location.replace('/')}>⬅️ 나가기</Button>
              <Button float="right" color="#6300eb" onClick={downloadTxtFile}>
                출간하기
              </Button>
            </div>
          </div>
      </PageWrapper>
    </>
  );
};

export default Post;
