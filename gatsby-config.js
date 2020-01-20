module.exports = {
  siteMetadata: {
    title: `André | Software Engineer`,
    description: `I'm André, an ambitious, naturally curious Software Engineer, from Portugal.`,
    author: `André Gonçalves`,
    // TODO: Add url and image(logo)
    siteUrl: ``,
    siteImage: ``,
    social: {
      email: 'andgcv@gmail.com',
      github: 'andgcv',
      linkedin: 'andgcv'
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `André Gonçalves | Software Engineer`,
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
