import React from "react";
import { graphql } from "gatsby";
import Artist from "../components/Artist";

import SEO from "../components/seo";
import {
  AboutUsContainer,
  PhotosContainer,
  GroupPhoto,
  StoryContainer,
  Contact,
  Description,
  ListOfArtists,
  AboutUsTitle,
} from "../StyledComponents/About.styles";

const About = ({ data }) => {
  const { artists, description, email, title, photo, platform } =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <>
      <SEO title="SPANDAU20 About us" />
      <AboutUsContainer>
        <PhotosContainer>
          <GroupPhoto src={`/${photo}`} />
        </PhotosContainer>
        <StoryContainer>
          <AboutUsTitle>{title}</AboutUsTitle>
          <Contact>
            <p>CONTACT</p>
            <p>mail: {email}</p>
            {platform?.map(
              ({ platformName, displayName, link, isShown }, idx) => {
                return (
                  isShown && (
                    <p key={idx}>
                      <a href={link}>
                        {platformName}
                        {displayName && `: ${displayName}`}
                      </a>
                    </p>
                  )
                );
              }
            )}
          </Contact>
          <Description>{description}</Description>
          <ListOfArtists>
            {artists.map(({ artist, link }, idx) => (
              <Artist key={idx} index={idx} artist={artist} link={link} />
            ))}
          </ListOfArtists>
        </StoryContainer>
      </AboutUsContainer>
    </>
  );
};

export default About;

export const query = graphql`
  query AboutPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "aboutUs" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              email
              description
              title
              photo
              artists {
                artist
                link
              }
              platform {
                platformName
                displayName
                link
                isShown
              }
            }
          }
        }
      }
    }
  }
`;
