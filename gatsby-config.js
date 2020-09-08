module.exports = {
  siteMetadata: {
    title: `Liquid Propulsion Group`,
    titleTemplate: "%s | Liquid Propulsion Group",
    description: `We build rocket engines`,
    author: `@liquidpropulsiongroup`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Liquid Propulsion Group`,
        short_name: `LPG`,
        start_url: `/`,
        background_color: `#151B35`,
        theme_color: `#151B35`,
        display: `browser`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
