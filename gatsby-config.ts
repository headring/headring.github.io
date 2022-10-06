import type { GatsbyConfig } from "gatsby";
require("dotenv").config();

const config: GatsbyConfig = {
  pathPrefix: '/oreum',
  siteMetadata: {
    title: `oreum`,
    siteUrl: "https://headring.github.io/oreum-blog-gatsby/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen

  flags: {
    DEV_SSR: false,
  },
  graphqlTypegen: true,
  plugins: [
    //   {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     "url": ""
    //   }
    // },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://headring.github.io/oreum-blog-gatsby/",
        stripQueryString: true,
      },
    },

    `gatsby-transformer-remark`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    //  {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-auth-tutorial",
        short_name: "auth",
        start_url: "/oreum-blog-gatsby/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This pat
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "article",
        path: "./src/article/",
      },
      __key: "article",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    "gatsby-plugin-dark-mode",
  ],
};

export default config;
