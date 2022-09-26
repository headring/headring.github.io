import styled from 'styled-components'

export const PageWrapper = styled.div`
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
export const HiddenForm = styled.form`
  visibility: hidden;
`;
export const Button = styled.button`
  font-size: 32px;
  background: ${(props) => props.color || "#fff"};
  float: ${(props) => props.float || null};
`;
export const DIV_Hover = styled.div`
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