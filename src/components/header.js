import React from "react";
import { Link, navigate } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { getUser, isLoggedIn, logout } from "../services/auth";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body.dark {
    -webkit-font-smoothing: antialiased;

    --bg: darkslategray;
    --textNormal: rgba(255, 255, 255, 0.88);
    --textTitle: white;
    --textLink: yellow;
    --hr: hsla(0, 0%, 100%, 0.2);

    background-color: var(--bg);
    color: var(--textTitle);
  }
`;

const Header = ({ siteTitle }) => {
  const content = { message: "", login: true };
  if (isLoggedIn()) {
    // content.message = `Hello, ${getUser().name}`;
    content.login = false;
  } else {
    // content.message = "You are not logged in";
  }

  return (
    <div
      style={
        {
          // background: "white",
          // marginBottom: "1.45rem",
        }
      }
    >
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          height: "72px",
        }}
      >
        {/* <h1 style={{ margin: 0 }}> */}
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "28px",
          }}
        >
          {siteTitle}
        </Link>
        {/* </h1> */}

        <span>{content.message}</span>
        {/* <nav> */}
        {/* <Link to="/">Home</Link> */}
        <Link to="/">모든 글 보기</Link>
        <Link to="/app/post">글 작성</Link>
        <Link to="/app/contents">글 상세페이지(임시)</Link>
        <Link to="/">검색</Link>
        <Link to="/app/profile">Profile</Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />{" "}
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
        {/* </nav> */}
      </div>
    </div>
  );
};

export default Header;
