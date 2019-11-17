module.exports = {
  siteMetadata: {
    title: `André Gonçalves | Back-end Engineer`,
    description: `I'm André, a 22 years old ambitious and hand-on Back-end Engineer, from Portugal.`,
    author: `André Gonçalves`,
    // TODO: Add siteUrl
    social: {
      email: 'andgcv@gmail.com',
      github: 'andgcv',
      linkedin: 'andgcv',
      twitter: 'andregcv'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `André Gonçalves | Back-end Engineer`,
        short_name: `André`,
        // TODO: Add icon,
        start_url: `/`,
        background_color: `#282c37`,
        theme_color: `#2B90D9`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ]
}
