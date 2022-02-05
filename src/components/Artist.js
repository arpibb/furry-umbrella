import React from "react";

const Artist = ({ artist, link, index }) => {
  return (
    <li key={index} style={{ position: "relative", width: "fit-content" }}>
      <a href={link}>{artist}</a>
    </li>
  );
};

export default Artist;
