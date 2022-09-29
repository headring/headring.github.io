import React from "react";
import Helmet from "react-helmet";
import Header from "../Header";

import { useSiteMetadata } from "../../hooks/use-site-metadata.js";
import { Wapper } from "./styles";

const Layout = ({ children }) => {
  const data = useSiteMetadata();

  return (
    <>
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
    </>
  );
};

export default Layout;
