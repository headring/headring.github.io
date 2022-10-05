import React from "react";
import { Link, navigate } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { isLoggedIn, logout } from "../../services/auth";
import { Modal } from "../Modal";

import { Container } from "./styles";

const Header = ({ siteTitle }) => {
  const content = { message: "", login: true };
  if (isLoggedIn()) {
    // content.message = `Hello, ${getUser().name}`;
    content.login = false;
  } else {
    // content.message = "You are not logged in";
  }

  return (
    <Container>
      <Link className="logo" to="/">
        {siteTitle}
      </Link>
      <div id="hamburger-menu"></div>
      <span>{content.message}</span>
      <Link to="/post-list">모든 글 보기</Link>
      {isLoggedIn() ? <Link to="/app/write">글 작성</Link> : null}
      <Modal active={"검색"} type={"form"}></Modal>
      <Link to="/app/profile">Profile</Link>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                return toggleTheme(e.target.checked ? "dark" : "light");
              }}
              checked={theme === "dark"}
            />
            <span>Dark mode</span>
          </label>
        )}
      </ThemeToggler>
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
    </Container>
  );
};

export default Header;
