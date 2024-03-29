const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It`s important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/',
            },
          },
        ],
      },
    },
  ],
}
