import React, {useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import styled from "styled-components"
// import GlobalStyle from "../styles/GlobalStyle";

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
`
const HiddenForm = styled.form`
  visibility: hidden;
`
const Button = styled.button`
  font-size: 32px;
  background: ${(props) => props.color || '#fff'};
  float: ${(props) => props.float || null};

`
const DIV_Hover = styled.div`
  transition: top 1s ease-in; // trasition 으로 top 이동시 자연스럽게 만들어 주자
  top: 20px; 		       // 호버메시지의 원래 위치 

  &.hover { 			// 호버시 추가되는 클래스
    top: 0px; 			// 호버시 top 위치를 조금 위로 움직여준다.
    animation-duration: 3s;  	// 애니메이션 3초동안 실행 
    animation-name: fadeout; 	// 애니메이션 효과는 fade-out
  }
  
  @keyframes fadeout { 		// fade-out시 opacity를 흐릿하다가 선명하기 만들자
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
  const file = new Blob([document.querySelector('.w-md-editor-text-input').value], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.md";
  document.body.appendChild(element);
  element.click();
};

// 다운로드 버튼 ver2
const downloadTxtFile2 = () => {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('input').value],    
              {type: 'text/plain;charset=utf-8'});
  element.href = URL.createObjectURL(file);
  element.download = "myFile.md";
  document.body.appendChild(element);
  element.click();
}

const mkdStr = `
# Markdown Editor

[Source](https://www.npmjs.com/package/@uiw/react-md-editor)
hi
---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

export default function Write() {
  const [value, setValue] = useState(mkdStr);
  // const [hover, setHover] = useState<string>('');

  return (
    <>
      {/* <GlobalStyle /> */}
      <div>
        <p>working</p>
      </div>
      <PageWrapper>
        <div data-color-mode="light">
          <p>help?
            <h3>Design</h3>
            <p>일러스트를 이용한 디자인입니다.</p>
          </p>
          <MDEditor preview="preview" height={972} value={value} onChange={setValue} />
          <div className="button__rows">
            <Button>⬅️ 나가기</Button>
            <Button float="right" color="#6300eb"  onClick={downloadTxtFile}>출간하기</Button>
            <Button float="right">임시저장</Button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
