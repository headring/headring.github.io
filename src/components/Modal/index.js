import React, { useState } from "react";
import { ModalContainer, ModalBackdrop, ModalBtn, ModalView } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ type, inputText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
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
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
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
