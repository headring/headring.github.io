import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, navigate } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { isLoggedIn, logout } from "../../services/auth";
import { Modal } from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faUser,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Buttons, Icons, Button, Logo, Dark, Icon } from "./styles";

export const changeTheme = () => {
  return {
    type: "CHANGETHEME",
  };
};

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();
  const content = { message: "", login: true };
  return (
    <Container>
      <Logo>
        <Link className="logo" to="/">
          {siteTitle}
        </Link>
      </Logo>

      <span>{content.message}</span>
      <Buttons>
        <Button>
          <Link className="under" to="/post-list">
            모든 글 보기
          </Link>
        </Button>
        <Button>
          {isLoggedIn() ? (
            <Link className="under" to="/app/write">
              글 작성
            </Link>
          ) : null}
        </Button>

        <Icons>
          <Icon>
            <Modal active={"검색"} type={"form"} />
          </Icon>
          <Icon>
            {isLoggedIn() ? (
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  logout(() => navigate(`/app/login`));
                }}
              >
                <FontAwesomeIcon icon={faLockOpen} />
              </a>
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </Icon>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Icon>
                <Dark
                  onClick={() => {
                    dispatch(changeTheme(theme));
                    toggleTheme(theme === "dark" ? "light" : "dark");
                  }}
                >
                  {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} />
                  )}
                </Dark>
              </Icon>
            )}
          </ThemeToggler>
        </Icons>
      </Buttons>
    </Container>
  );
};

export default Header;
