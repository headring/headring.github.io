import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { PageWrapper, Button } from "./style";
import { downloadTxtFile, tempStorage } from "./postOnClickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../pages/app";

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
  // const dispatch = useDispatch();
  // dispatch(changeTheme(state));
  const state = useSelector((state) => state);

  const [value, setValue] = useState(mkdStr);

  useEffect(() => {
    let localLoader = window.localStorage.getItem("tempMkd");
    if (localLoader) return setValue(localLoader);
  }, []);

  return (
    <>
      <PageWrapper>
        <div data-color-mode={window.localStorage.getItem("theme")}>
          <MDEditor
            className="md-editor"
            height={972}
            value={value}
            onChange={setValue}
          />
          <div className="button__rows">
            <Button onClick={(e) => window.location.replace("/")}>
              <FontAwesomeIcon icon={faArrowLeft} fontSize={"27px"} />
              나가기
            </Button>
            <Button className="purple" float="right" onClick={downloadTxtFile}>
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
