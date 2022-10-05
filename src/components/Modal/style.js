import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  /* height: 15rem; */
  text-align: center;
  justify-content: center;
  /* margin: 120px auto; */
`;

export const ModalBtn = styled.div`
  /* height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem; */
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  word-break: keep-all;
  background: var(--bg-element2);
  border: 1px solid var(--bg-element5);
  color: var(--bg-element5);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
  width: 30%;
  height: 30%;

  > span.close-btn {
    margin-top: -5%;
    margin-bottom: 5%;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
  input {
    height: 150%;
    border-radius: 40px;
  }
  button {
    height: 150%;
    border-radius: 40px;
  }
`;
