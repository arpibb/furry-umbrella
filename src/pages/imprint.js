import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { mediaQueries, fontSizes } from '../styles/variables';

import SEO from '../components/seo';

import { AboutUsContainer, Contact } from '../StyledComponents/About.styles';
import { Title } from '../StyledComponents/Releases.styles';

const StyledImprint = styled.div`
  width: 90%;
  max-width: 1000px;
  }

  ${mediaQueries.desktop} {
    width: 90%;
  }

  ${mediaQueries.medium} {
    width: 100%;
  }

  ${mediaQueries.small} {
    font-size: ${fontSizes.large}px;
  }
`;

const Section = styled.div`
  margin-top: 32px;

  > * {
    font-family: 'neue-haas-grotesk-text';
  }

  > p {
    font-size: 18px;

    &:first-child {
      margin-bottom: 8px;
    }
  }
`;

const ImprintPage = ({ data }) => {
  const { email, instagram, title, paragraphs } =
    data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
    <>
      <SEO title='SPANDAU20 Imprint' />
      <AboutUsContainer>
        <StyledImprint>
          <Title>{title}</Title>
          <Contact>
            <p>Contact</p>
            <p>mail: {email}</p>
            <p>
              instagram: <a href={instagram}>@spandau.20</a>
            </p>
          </Contact>
          {paragraphs?.map(({ titleOfParagraph, paragraph }, idx) => (
            <Section id={idx}>
              <p>{titleOfParagraph}</p>
              <p>{paragraph}</p>
            </Section>
          ))}
        </StyledImprint>
      </AboutUsContainer>
    </>
  );
};

export default ImprintPage;

export const query = graphql`
  query ImprintPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "imprint" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              email
              instagram
              title
              paragraphs {
                titleOfParagraph
                paragraph
              }
            }
          }
        }
      }
    }
  }
`;
