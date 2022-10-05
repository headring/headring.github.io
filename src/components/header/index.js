import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, navigate } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { isLoggedIn, logout } from "../../services/auth";
import { Modal } from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faMagnifyingGlass,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Buttons, Icons, Button, Logo, Dark, Icon } from "./styles";

const Header = ({ siteTitle }) => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  const content = { message: "", login: true };
  if (isLoggedIn()) {
    // content.message = `Hello, ${getUser().name}`;
    content.login = false;
  } else {
    // content.message = "You are not logged in";
  }

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
          <Link to="/post-list">모든 글 보기</Link>
        </Button>
        <Button>
          {isLoggedIn() ? <Link to="/app/write">글 작성</Link> : null}
        </Button>

        <Icons>
          <Icon>
            <Modal
              inActive={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              active={"입력 중"}
              type={"form"}
            >
              {/* <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> */}
            </Modal>
          </Icon>
          {/* <Button>
          <Link to="/app/profile">Profile</Link>
        </Button> */}
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Icon>
                <Dark
                  onClick={() => {
                    toggleTheme(theme === "dark" ? "light" : "dark");
                  }}
                >
                  {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} />
                  )}
                </Dark>
                {/* <input
                type="checkbox"
                onChange={(e) => {
                  return toggleTheme(e.target.checked ? "dark" : "light");
                }}
                checked={theme === "dark"}
              /> */}
              </Icon>
            )}
          </ThemeToggler>
          <Button>
            {isLoggedIn() ? (
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  logout(() => navigate(`/app/login`));
                }}
              >
                Logout
              </a>
            ) : null}
          </Button>
        </Icons>
      </Buttons>
    </Container>
  );
};

export default Header;
