// src/components/layout.js
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './header'; // Assuming you have a Header component
import SocialMedia from './socialmedia';
// import Footer from './footer' // Optional: if you have/want a footer

// 1. Define your theme object with colors
const theme = {
  colors: {
    // Your palette:
    steelBlue: '#7D95BA',   // Primary Accent / Lighter Blue
    deepBlue: '#172524',    // Dark background/text
    spaceCadet: '#383271',  // Accent / Darker Blue/Purple
    skyBlue: '#6396B3',     // Secondary accent / Medium Blue
    lavenderBlue: '#9CA8DD',// Light accent / Lavender

    // Standard additions:
    white: '#FFFFFF',
    lightGrey: '#f8f8f8',   // Example light background
    darkGrey: '#333333',    // Example dark text for body copy
  },
  // Add fonts, breakpoints etc. if needed
  // fonts: {
  //   main: 'YourFont, sans-serif',
  // },
};

// 2. Create GlobalStyle with CSS Variables
const GlobalStyle = createGlobalStyle`
  :root {
    /* Assign theme colors to CSS Variables */
    --color-bg: ${theme.colors.lightGrey}; /* Or white */
    --color-text: ${theme.colors.darkGrey};
    --color-primary: ${theme.colors.steelBlue};
    --color-secondary: ${theme.colors.skyBlue};
    --color-accent1: ${theme.colors.spaceCadet};
    --color-accent2: ${theme.colors.lavenderBlue};
    --color-dark: ${theme.colors.deepBlue}; /* Use for headings maybe */
    --color-white: ${theme.colors.white};

    /* Add font variables if needed */
    /* --font-main: ${theme.fonts.main}; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    /* font-family: var(--font-main); */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Basic fallback */
    line-height: 1.6;
    word-wrap: break-word; // Prevent long strings from breaking layout
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-dark); /* Use the dark blue for headings */
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 1.5rem; /* Add some top margin */
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover, &:focus {
      color: var(--color-secondary);
      text-decoration: underline; /* Add underline on hover/focus for clarity */
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Add more base styles as needed */
`;

// 3. Layout Component using ThemeProvider and GlobalStyle
const Layout = ({ children }) => {
  // Fetch site title from gatsby-config.js
  const data = useStaticQuery(graphql`
    query SiteTitleQueryLayout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}> {/* Provide theme to styled-components */}
      <GlobalStyle /> {/* Inject global styles */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100, // Adjust max width of content area
          padding: `1rem 1.0875rem 1.45rem`, // Add top padding
        }}
      >
        <main>{children}</main>
        {/* Optional Footer
        <footer style={{ marginTop: `2rem`, color: 'var(--color-text)' }}>
          © {new Date().getFullYear()}, Built by {data.site.siteMetadata?.author || 'Johannes Fagerberg'}
        </footer>
        */}
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;