import React from "react";
import { Article, Title, StyledContent } from "./style";
import ReactMarkdown from "react-markdown";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import fs from "fs";
// const fs = require("fs");

const markdown = `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can't go back!**`;

// fs.writeFileSync("test.md", "\ufeff" + markdown, { encoding: "utf8" });

const Contents = () => {
  return (
    <Article>
      <Title>{"S3.[자료구조/알고리즘] 재귀"}</Title>
      <div className="text-2xl">TEST</div>
      <div className="text-xl">TEST2</div>

      <span>{"Bootcamp "}</span>
      <span>{"2022. 8. 23. 14:45"}</span>
      <StyledContent id="Markdown">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </StyledContent>
    </Article>
  );
};

export default Contents;
