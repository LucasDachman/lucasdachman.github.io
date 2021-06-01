module.exports = {
  siteMetadata: {
    title: `Lucas Dachman Portfolio`,
    author: `Lucas Dachman`,
    description: `Lucas Dachman Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Dachman`,
        short_name: `ldachman`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#383838`,
        display: `minimal-ui`,
        icon: `src/images/tile.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134150630-2 ",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        cookieDomain: "lucasdachman.dev",
      },
    },
  ],
};
