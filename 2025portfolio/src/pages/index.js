import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectCard from "../components/ProjectCard";
import SocialMedia from "../components/socialmedia"; // Import the SocialMedia component
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import profileLogo from "../images/ProfilePic2.jpg"; // Replace with the actual path to your logo

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            date
            tags
            excerpt
            thumbnail {
              childImageSharp {
                mostRecent: gatsbyImageData(
                layout: CONSTRAINED
                width: 800 # Set the width for the most recent project image
                height: 450 # Set the height for the most recent project image (16:9 aspect ratio)
                placeholder: BLURRED
              )
                gridThumbnail: gatsbyImageData(
                  layout: CONSTRAINED
                  aspectRatio: 1
                  placeholder: BLURRED
                )
              }
            }
            source
          }
        }
      }
    }
  `);

  const ScaledContainer = styled.div`
    transform: scale(0.6); /* Scale down to 60% */
    transform-origin: top center; /* Scale from the top-center */
    width: 100%; /* Ensure the container takes the full width */
    height: 100%; /* Ensure the container takes the full height */
    overflow: hidden; /* Prevent any overflow issues */

    @media (max-width: 768px) {
      transform: scale(1); /* Disable scaling on mobile */
    }
  `;
  const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Create 2 equal columns */
  gap: 1rem; /* Add space between grid items */
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack items in one column on smaller screens */
  }
`;
  const IntroSection = styled.section`
    text-align: left;
    margin-bottom: 0.1rem;
    display: flex;
    padding-top: 5rem; /* Add padding to the top of the section */
    flex-direction: row; /* Align image and text side by side */
    align-items: flex-start; /* Align items to the top */
    gap: 1.5rem; /* Add space between the image and text */
    width: 100%; /* Allow the section to take full width */

    @media (max-width: 768px) {
      padding-top: 1rem; /* Add padding to the top of the section */
      margin-bottom: 0rem; /* Add more space below the section on mobile */
      gap: 0rem; /* Reduce gap for smaller screens */
      flex-direction: column; /* Stack image and text vertically on smaller screens */
      align-items: center; /* Center-align content on mobile */
    }
  `;

  const ImageAndLogosContainer = styled.div`
    display: flex;
    flex-direction: column; /* Stack the image and logos vertically */
    align-items: flex-start; /* Align content to the left */
    gap: 1rem; /* Add space between the image and logos */

    @media (max-width: 768px) {
      align-items: center; /* Center-align content on mobile */
      gap: 0rem; /* Reduce gap for smaller screens */
    }
  `;

  const Logo = styled.img`
    width: 200px; /* Make the image smaller */
    height: auto; /* Maintain aspect ratio */

    @media (max-width: 768px) {
      width: 150px; /* Reduce size further on smaller screens */
    }
  `;

  const IntroText = styled.div`
    margin-top: 4rem; /* Reduce the top margin */
    h1 {
      font-size: 3.5rem; /* Larger font size */
      font-weight: bold;
      margin: 0;
      color: var(--color-dark);

      @media (max-width: 768px) {
        font-size: 2.5rem; /* Larger font size on smaller screens */
      }
    }

    p {
      font-size: 1.8rem; /* Larger font size */
      color: var(--color-dark);
      margin-top: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1.5rem; /* Larger font size on smaller screens */
      }
    }
  `;

  const SectionTitle = styled.h2`
    font-size: 2.5rem; /* Larger font size */
    font-weight: bold;
    text-align: center;
    margin: 0.5rem 0 1rem; /* Reduced top margin to 0.5rem */
    color: var(--color-dark);

    @media (max-width: 768px) {
      font-size: 2rem; /* Larger font size on smaller screens */
    }
  `;

  const MostRecentProject = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Keep the current width */
    height: auto; /* Let the height adjust dynamically */
    aspect-ratio: 16 / 9; /* Ensure consistent aspect ratio */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 100%; /* Ensure it matches the width of the grid items */
      height: auto; /* Adjust height dynamically for smaller screens */
    }
  `;

  const allProjects = data.allMdx.nodes;

  // State for filtering and sorting
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  // Get unique tags
  const allTags = ["All", ...new Set(allProjects.flatMap((project) => project.frontmatter.tags || []))];

  // Filter projects by tag and exclude unintended files (e.g., 404.mdx)
  const filteredProjects = selectedTag === "All"
    ? allProjects.filter((project) => project.frontmatter.slug !== "404") // Exclude 404.mdx
    : allProjects.filter(
        (project) =>
          (project.frontmatter.tags || []).includes(selectedTag) &&
          project.frontmatter.slug !== "404" // Exclude 404.mdx
      );

  // Sort projects by date
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <Layout>
      <Seo title="Home" />
      <ScaledContainer>
        <IntroSection>
          <ImageAndLogosContainer>
            <Logo src={profileLogo} alt="Logo" />
            <SocialMedia /> {/* Social media icons remain below the image */}
          </ImageAndLogosContainer>
          <IntroText>
            <h1>Hi, I am Johannes</h1>
            <p>Developer currently in Uppsala, Sweden.</p>
          </IntroText>
        </IntroSection>

        {/* Most Recent Project */}
        {sortedProjects.length > 0 && (
          <>
            <SectionTitle>Latest Project</SectionTitle>
            <MostRecentProject>
            {sortedProjects[0].frontmatter.thumbnail ? (
              <ProjectCard
                key={sortedProjects[0].id}
                title={sortedProjects[0].frontmatter.title}
                slug={sortedProjects[0].frontmatter.slug}
                thumbnail={getImage(sortedProjects[0].frontmatter.thumbnail.childImageSharp.mostRecent)}
                isFirst={true}
              />
            ) : (
              <div>No thumbnail available for the most recent project.</div>
            )}
          </MostRecentProject>
          </>
        )}

        {/* Remaining Projects Grid */}
        <SectionTitle>More</SectionTitle>
        <ProjectsGrid>
        {sortedProjects.slice(1).map((project) => {
          const thumb = project.frontmatter.thumbnail
            ? getImage(project.frontmatter.thumbnail.childImageSharp.gridThumbnail)
            : null;

          return (
            <ProjectCard
              key={project.id}
              title={project.frontmatter.title}
              slug={project.frontmatter.slug}
              thumbnail={thumb} // Pass null if no thumbnail exists
            />
          );
        })}
      </ProjectsGrid>
      </ScaledContainer>
    </Layout>
  );
};

export default IndexPage;