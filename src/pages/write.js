import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Modal } from "../components/Modal";
import Post from "../components/Post";

// styled
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    min-width: 90vw;
    max-width: 90vw;
  }
  /* p {
    margin-top: 0;
    margin-bottom: 2em;
    color: blue;
    &:hover {
      color:red;
      font-size: 20px;
      opacity: 1;
    }
  } */
  @media ${(props) => props.theme.mobile} {
    .md-editor.w-md-editor-show-live {
      .w-md-editor-input {
        width: 100%;
      }
      .w-md-editor-preview {
        display: none;
      }
    }
  }
`;
const HiddenForm = styled.form`
  visibility: hidden;
`;
const Button = styled.button`
  font-size: 32px;
  background: ${(props) => props.color || "#fff"};
  float: ${(props) => props.float || null};
`;
const DIV_Hover = styled.div`
  transition: top 1s ease-in; // trasition 으로 top 이동시 자연스럽게 만들어 주자
  top: 20px; // 호버메시지의 원래 위치

  &.hover {
    // 호버시 추가되는 클래스
    top: 0px; // 호버시 top 위치를 조금 위로 움직여준다.
    animation-duration: 3s; // 애니메이션 3초동안 실행
    animation-name: fadeout; // 애니메이션 효과는 fade-out
  }

  @keyframes fadeout {
    // fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
// 출처: https://devbirdfeet.tistory.com/213 [새발개발자:티스토리]

// 다운로드 기능
const downloadTxtFile = (value) => {
  console.log(value);
  const element = document.createElement("a");
  const file = new Blob(
    [document.querySelector(".w-md-editor-text-input").value],
    {
      type: "text/plain",
    }
  );
  element.href = URL.createObjectURL(file);
  element.download = "myFile.md";
  document.body.appendChild(element);
  element.click();
};

const mkdStr = `
/* REQUIRED AREA for GraphQl */
---
title: "title for your post"
description: "description for your post"
date: date in YYYY-MM-DD
update: date in YYYY-MM-DD
tags: (multiple tags can be written as below.)
  - react
  - custom component
series: "title for your post serires such as 'React BreakDown'"
---
/* REQUIRED AREA for GraphQl */

**FROM HERE, WRITE CONTENTS USING MARKDOWN SYNTAX
`;

const _textInput = `
---
title: "🤔 3. Writing Guide"
description: "How to write and add a post?"
date: 2021-05-03
update: 2021-05-03
tags:
  - react
  - custom component
series: "Getting started your blog with gatsby-starter-hoodie"
---
**WRITE CONTES USING MARKDOWN SYNTAX
`

export default function Write() {
  const [value, setValue] = useState(mkdStr);
  // const [hover, setHover] = useState<string>('');


  return (
    <>
      {/* <GlobalStyle /> */}
      <PageWrapper>
        <Post></Post>
        <div data-color-mode="dark">
          <MDEditor
            className="md-editor"
            height={972}
            value={value}
            onChange={setValue}
          />
          <div className="button__rows">
            <Button>⬅️ 나가기</Button>
            <Button float="right" color="#6300eb" onClick={downloadTxtFile}>
              출간하기
            </Button>
            <Button float="right">임시저장</Button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
