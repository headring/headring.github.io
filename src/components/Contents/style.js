import styled from "styled-components";

export const Title = styled.strong`
  /* display: flex;
  justify-content: center; */
  width: 768px;
  font-size: 3rem;
  font-weight: 800;
  margin: 0 auto;
  padding: 12px;
`;

export const Date = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 768px;
  margin: 0 auto;
  padding: 12px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;

export const Box = styled.div`
  border: 0px;
`;

export const StyledContent = styled.div`
  line-height: 1.4;
  blockquote {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    font-style: italic;
    padding-left: 8px;
    border-left: 5px solid #6b6b6b;
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a,
  p a {
    color: rgb(74, 144, 226);
    border-bottom: 1px dotted rgb(91, 159, 239);
    text-decoration: none;

    &:hover {
      border-bottom-style: solid;
    }

    // Anchor of title
    &.anchor {
      border-bottom: none;
    }
  }
  // Each item max width
  div.gatsby-highlight,
  ul,
  div.gist,
  ol,
  p.md-p,
  h1.md-h1,
  h2.md-h2,
  h3.md-h3,
  h4.md-h4,
  h5.md-h5,
  h6.md-h6 {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  // only texts
  p.md-p,
  div.gist,
  h1.md-h1,
  h2.md-h2,
  h3.md-h3,
  h4.md-h4,
  h5.md-h5,
  .glitch-embed-wrap,
  table,
  h6.md-h6 {
    padding-left: 10px;
    padding-right: 10px;
  }

  table {
    overflow-x: scroll;
    max-width: 1200px;
    border: 1px solid #eee;
    margin-left: auto;
    margin-right: auto;
  }

  .glitch-embed-wrap {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
  }

  figure img {
    border: 1px solid #eee;
  }

  p.md-p > img {
    margin-left: auto;
    margin-right: auto;
  }

  // dots of list
  ul,
  ol {
    padding-left: 30px;
    padding-right: 12px;
  }

  p.md-p,
  ul {
    font-family: "Gentium Book Basic";
  }

  p.md-p,
  .gatsby-highlight,
  ul {
    font-size: 17px;
  }

  p {
    padding-left: 12px;
    padding-right: 12px;
  }

  // all texts
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p a {
    line-height: 1.4;
  }

  h1.md-h1,
  h2.md-h2,
  h3.md-h3,
  h4.md-h4,
  h5.md-h5,
  h6.md-h6 {
    font-family: "Open Sans";
  }

  h2.md-h2 {
    text-align: center;
  }

  h3.md-h3,
  h2.md-h2 {
    margin-top: 30px;
    font-size: 21px;
  }

  h4.md-h4 {
    font-size: 16px;
  }

  h6.md-h6 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.53);
    text-align: center;
    font-size: 12px;
    position: relative;
    top: -25px;
    margin-bottom: 0;
  }

  div.gatsby-highlight {
    & + h4,
    & + h3,
    & + h2 {
      margin-top: 30px !important;
    }

    a {
      color: #69bcdb;
    }
  }

  // Aun no se si se usa
  .gatsby-resp-image-wrapper {
    max-width: 1000px !important;
  }

  .gatsby-resp-iframe-wrapper {
    max-width: 100%;
  }
  .gatsby-resp-image-figcaption {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 45px;
    font-weight: 600;
    padding-left: 12px;
    line-height: 1.9;
    padding-right: 12px;
    font-family: "Open Sans";
    color: #0000008a;
    font-size: 12px;
    max-width: 600px !important;
  }

  img.emoji-icon {
    display: inline;
    margin: 0;
    position: relative;
    top: 3px;
    width: 17px;
  }
`;

export const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 16px;
  word-break: break-all;
  /* border: 1px solid lightgray; */

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 40px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*="language-"] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    tab-size: 2;
  }

  iframe {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
