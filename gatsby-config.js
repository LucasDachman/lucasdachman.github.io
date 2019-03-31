module.exports = {
  pathPrefix: `/portfolio-v2`,
  siteMetadata: {
    title: `Lucas Dachman Portfolio`,
    author: `Lucas Dachman`,
    description: `Lucas Dachman Portfolio`
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
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
