import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import { formatReleaseData } from "../lib/releaseHelper";
import { useWindowSize } from "../lib/useWindowSize";
import { screenSizes } from "../styles/variables";

import SEO from "../components/seo";

import ReleasesContentWeb from "../components/ReleasesContentWeb";
import ReleasesContentMobile from "../components/ReleasesContentMobile";

const Releases = ({ data }) => {
  const [releaseData, setReleaseData] = useState(undefined);
  const { width } = useWindowSize();

  const isBelowTablet = width <= screenSizes.tablet;

  useEffect(() => {
    const formattedData = formatReleaseData(data).filter(
      release => release.title !== "null"
    );
    setReleaseData(formattedData);
  }, [data]);

  return (
    <>
      <SEO title="SPANDAU20 Releases" />
      {isBelowTablet ? (
        <ReleasesContentMobile releaseData={releaseData} />
      ) : (
        <ReleasesContentWeb releaseData={releaseData} />
      )}
    </>
  );
};

export default Releases;

export const query = graphql`
  query ReleasesQuery {
    allFile(filter: { sourceInstanceName: { eq: "releases" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              order
              title
              description
              embed
              sideAndTrack {
                name
                titleOfTrack
                link
              }
              vinylBuyingOptions {
                name
                link
              }
              digitalBuyingOptions {
                name
                link
              }
            }
          }
        }
      }
    }
  }
`;
