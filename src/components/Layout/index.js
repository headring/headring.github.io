import React from "react";

import Helmet from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata.js";

import Header from "../Header";
import Footer from "../Footer";

import GlobalStyle from "../../styles/GlobalStyle";
import { Wapper } from "./styles";

const Layout = ({ children }) => {
  const data = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wapper>{children}</Wapper>
      <Footer />
    </>
  );
};

export default Layout;
