import React from "react";
import Helmet from "react-helmet";
import Header from "../header";

import { useSiteMetadata } from "../../hooks/use-site-metadata.js";

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
      <Header siteTitle={"oreum"} />
      {/* siteTitle={data.site.siteMetadata.title}  */}
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
