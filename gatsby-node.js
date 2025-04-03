// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all MDX files
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug # We need the slug to create the URL
            date
            tags
            sourceLink
            excerpt
          }
          internal {
            contentFilePath # Needed for MDX v2+ template resolution
          }
            
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Path to the template component
  const projectTemplate = path.resolve(`./src/templates/project-template.js`);

  // Create a page for each MDX node
  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`, // The URL path for the page
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`, // Absolute path to the template + query param
      context: {
        // Data passed to the template component's page query
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MdxFrontmatter {
      heroVideoUrl: String
      heroImage: File @fileByRelativePath
    }
  `);
};
// Optional: If you modify the schema (e.g., ensure fields exist)
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   // Define types to prevent errors if fields are missing in some MDX files
//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       title: String!
//       slug: String!
//       date: Date @dateformat
//       tags: [String]
//       excerpt: String
//       thumbnail: File @fileByRelativePath
//       heroimage: File @fileByRelativePath
//       heroVideoUrl: String
//     }
//   `);
// };