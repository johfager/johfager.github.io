import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

// --- Styled Components for Project Page ---

const ProjectHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }
`;

const ProjectTags = styled.div`
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeroMedia = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center-align the buttons */

  iframe {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
  }
`;

const ProjectContent = styled.section`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;

  p, ul, ol {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  ul, ol {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  h2, h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--color-accent1);
  }

  blockquote {
    margin: 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid var(--color-primary);
    font-style: italic;
    color: var(--color-text);
  }

  .embedded-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;
    margin: 2rem 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SourceButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007acc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

// --- Project Template Component ---

const ProjectTemplate = ({ data, children }) => {
  const project = data.mdx.frontmatter;
  const heroImg = getImage(project.heroImage);

  return (
    <Layout>
      <Seo title={project.title} description={project.excerpt} />

      <ProjectHeader>
        <h1>{project.title}</h1>
        {project.tags && (
          <ProjectTags>{project.tags.join(' / ')}</ProjectTags>
        )}
      </ProjectHeader>

      <HeroMedia>
        {project.heroVideoUrl ? (
          <iframe
            src={project.heroVideoUrl}
            title={`${project.title} Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : heroImg ? (
          <GatsbyImage image={heroImg} alt={`${project.title} hero image`} />
        ) : null}

        {/* Buttons for Source and Back */}
      </HeroMedia>
      
      <ButtonContainer>
      <BackButton to="/projects">Back to All Projects</BackButton>
          {project.source && (
            
            <SourceButton
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </SourceButton>
          )}

        </ButtonContainer>

      {/* Render the MDX content */}
      <ProjectContent>{children}</ProjectContent>
    </Layout>
  );
};

// --- Page Query ---

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        excerpt
        source # Fetch the optional source link
        heroVideoUrl # Fetch the video URL
        heroImage {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
        }
      }
    }
  }
`;

export default ProjectTemplate;