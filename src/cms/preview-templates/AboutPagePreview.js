import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/layout";
import styled from "styled-components";

import { StyleSheetManager } from "styled-components";

const StylesheetInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(undefined);
  useEffect(() => {
    const iframe = document.querySelector("#preview-pane");
    const iframeHeadElem = iframe && iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, [setIframeRef]);

  return (
    <>
      {iframeRef && (
        <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
      )}
    </>
  );
};

const AboutPagePreview = ({ entry, widgetsFor }) => {
  console.log("yess");

  return (
    <StylesheetInjector>
      {/* <SEO title="About page" /> */}
      <StoryContainer>
        <h2>
          {entry.getIn(["data", "title"]) && entry.getIn(["data", "title"])}
        </h2>
        <Contact>
          <p>contact</p>
          <p>
            mail:{" "}
            {entry.getIn(["data", "email"]) && entry.getIn(["data", "email"])}
          </p>
          <p>
            instagram:{" "}
            <a
              href={
                entry.getIn(["data", "instagram"]) &&
                entry.getIn(["data", "instagram"])
              }
            >
              @spandau.20/
            </a>
          </p>
        </Contact>
        <Description>
          {entry.getIn(["data", "description"]) &&
            entry.getIn(["data", "description"])}
        </Description>
        <ListOfArtists>
          {entry.getIn(["data", "artists"]) &&
            entry
              .getIn(["data", "artists"])
              .map(artistName => <li>{artistName}</li>)}
        </ListOfArtists>
      </StoryContainer>
    </StylesheetInjector>
  );
};

export default AboutPagePreview;
