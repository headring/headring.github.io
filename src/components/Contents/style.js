import styled from "styled-components";

export const Title = styled.strong`
  font-size: 3rem;
  font-weight: 800;
  padding: 12px;
  margin: 0 auto;
`;

export const Date = styled.div`
  padding: 12px;
  margin: 0 auto;
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

export const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  padding: 16px;
  word-break: break-all;

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

  img {
    max-width: 100%;
  }
`;
