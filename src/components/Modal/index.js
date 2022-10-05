import { Link } from "gatsby";
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import MainPage from "../../pages/MainPage";
import { ModalContainer, ModalBackdrop, ModalBtn, ModalView } from "./style";

export const Modal = ({ inActive, active, type, inputText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  // const text = useMemo(() => searchText, [searchText])

  const handleChange = (e) => setSearchText(e.target.value);
  const onSubmit = () => {
    localStorage.setItem("searchText", searchText);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? inActive : active}
        </ModalBtn>
        {isOpen === true ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={openModalHandler} className="close-btn">
                &times;
              </span>
              {type === "form" ? (
                <form onSubmit={onSubmit} action="/searchresult">
                  <input
                    placeholder="검색어를 입력하세요"
                    value={searchText}
                    onChange={handleChange}
                  />
                  <button>검색 아이콘</button>
                </form>
              ) : (
                <div className="desc">{inputText}</div>
              )}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
