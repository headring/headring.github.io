import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return data;
};
