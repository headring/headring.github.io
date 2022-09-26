import React from "react";
import { Link, navigate } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { getUser, isLoggedIn, logout } from "../../services/auth";
import { useState } from "react";
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
    <div>
      <Container>
        <Link
          className="logo"
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "28px",
          }}
        >
          {siteTitle}
        </Link>

        <span>{content.message}</span>
        <Link to="/">모든 글 보기</Link>
        {isLoggedIn() ? <Link to="/app/write">글 작성</Link> : null}
        <Link to="/app/contents">글 상세페이지(임시)</Link>
        <Link to="/">검색</Link>
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
              Dark mode
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
    </div>
  );
};

export default Header;
