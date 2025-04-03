// new-portfolio/gatsby-config.js
module.exports = {
  siteMetadata: {
    // --- Copy your metadata from the old project ---
    title: `Johannes Fagerberg Portfolio`,
    description: `Portfolio showcasing projects.`, // Update description
    author: `@johfa`,
    // pathPrefix: "/portfolio", // Only add this if deploying to a subfolder like johfager.github.io/portfolio/
    siteUrl: `https://johfager.github.io/`, // Add your main site URL
  },
  plugins: [
    // --- Core Gatsby & Image Plugins (usually present in starter) ---
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // --- Your Added Plugins ---
    `gatsby-plugin-styled-components`, // Add this
    {
      resolve: `gatsby-source-filesystem`, // Add this block for projects
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`, // Point to your MDX files
      },
    },
    {
      resolve: `gatsby-plugin-mdx`, // Add this block for MDX
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Configure this (often present in starter)
      options: {
        name: `johannes-fagerberg-portfolio`,
        short_name: `johfa-portfolio`,
        start_url: `/`,
        background_color: `#663399`, // Maybe use your palette? --color-bg?
        theme_color: `#7D95BA`,      // Maybe use your palette? --color-primary?
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Default starter icon - CHANGE THIS to your icon
      },
    },
    // `gatsby-plugin-google-fonts`, // Add this back if you were using it
    // `gatsby-plugin-offline`, // Add if needed
  ],
};