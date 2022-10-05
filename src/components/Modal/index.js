import React, { useState } from "react";
import { ModalContainer, ModalBackdrop, ModalBtn, ModalView } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

/////
const isBrowser = typeof window !== "undefined";
const themeReducer = (
  state = isBrowser ? localStorage.getItem("theme") : "light",
  action
) => {
  switch (action.type) {
    case "CHANGETHEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};
const store = createStore(themeReducer);
/////

export const Modal = ({ type, inputText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => setSearchText(e.target.value);
  const onSubmit = () => {
    window.localStorage.setItem("searchText", searchText);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Provider store={store}>
        <ModalContainer>
          <ModalBtn onClick={openModalHandler}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </ModalBtn>
          {isOpen === true ? (
            <ModalBackdrop onClick={openModalHandler}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                {type === "form" ? (
                  <form onSubmit={onSubmit} action="/searchresult">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                      placeholder="검색어를 입력하세요"
                      value={searchText}
                      onChange={handleChange}
                    />
                  </form>
                ) : (
                  <div className="desc">{inputText}</div>
                )}
              </ModalView>
            </ModalBackdrop>
          ) : null}
        </ModalContainer>
      </Provider>
    </>
  );
};
