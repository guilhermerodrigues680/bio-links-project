module.exports = {
  siteMetadata: {
    title: `Projeto Bio Links`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
