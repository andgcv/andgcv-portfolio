module.exports = {
  siteMetadata: {
    title: `André | Software Engineer`,
    description: `I'm André, an ambitious, naturally curious Software Engineer, from Portugal.`,
    author: `André Gonçalves`,
    siteUrl: `https://andgcv.com`,
    siteImage: `brand-share.png`,
    social: {
      email: 'andgcv@gmail.com',
      github: 'andgcv',
      linkedin: 'andgcv',
      goodreads: 'andgcv'
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`300`, `400`, `500`, `600`],
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `André | Software Engineer`,
        short_name: `André`,
        icon: `src/images/logo/main-icon.png`,
        start_url: `/`,
        background_color: `#282c37`,
        theme_color: `#2B90D9`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ]
}
