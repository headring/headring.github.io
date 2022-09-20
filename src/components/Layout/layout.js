import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Header from "../header";
import NavBar from "../navBar";

import { useSiteMetadata } from "../../hooks/use-site-metadata.js";

const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob(["hello"], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.md";
  document.body.appendChild(element);
  element.click();
};

const Layout = ({ children }) => {
  const result = useSiteMetadata();
  console.log("result", result);
  return (
    <>
      <Helmet
        // title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      {/* siteTitle={data.site.siteMetadata.title}  */}
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        <NavBar />
        {children}
        <button onClick={downloadTxtFile}>click</button>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
