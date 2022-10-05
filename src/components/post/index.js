import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { PageWrapper, Button } from "./style";
import {downloadTxtFile, tempStorage} from "./postOnClickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  
  useEffect(() => {
    let localLoader = localStorage.getItem('tempMkd')
    if(localLoader) return setValue(localLoader);

  }, [])
  
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
              <Button onClick={e=> window.location.replace('/')}> <FontAwesomeIcon icon={faArrowLeft} fontSize={'27px'} /> 나가기</Button>
              <Button float="right" color="#6300eb" onClick={downloadTxtFile}>
                출간하기
              </Button>
              <Button float="right" onClick={tempStorage}>
                임시저장
              </Button>
            </div>
          </div>
      </PageWrapper>
    </>
  );
};

export default Post;
