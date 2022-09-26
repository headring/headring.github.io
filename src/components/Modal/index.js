import React, { useState } from "react";
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  /* height: 15rem; */
  text-align: center;
  /* margin: 120px auto; */
`;

export const ModalBtn = styled.button`
  /* background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab; */
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  /* font-weight: bold; */
  word-break: keep-all;
  background: var(--bg-element2);
  border: 1px solid var(--bg-element5);
  color: var(--bg-element5);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 100px;

    > span.close-btn {
      margin-top: 5px;
      cursor: pointer;
    }

    > div.desc {
      margin-top: 25px;
      color: #4000c7;
    }
`;

export const Modal = ({ inActive, active, type, inputText}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('')

  const handleChange = (e) => setSearchText(e.target.value);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? inActive : active}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className='close-btn'>&times;</span>
            {type === 'form' ? 
            <form>
              <input
                placeholder="검색어를 입력하세요"
                value={searchText}
                onChange={handleChange}
              />
              <button>검색 아이콘</button>
            </form> 
            : 
            <div className="desc">{inputText}</div>}
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};