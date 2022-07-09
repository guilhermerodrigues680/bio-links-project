module.exports = {
  siteMetadata: {
    title: `Projeto Bio Links`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cmsdata`,
        path: `${__dirname}/cms-data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
};
