const editSizeParams = currentItem => {
  const regex = new RegExp("width: [0-9]+px; height: [0-9]+px;");
  return currentItem.replace(regex, `width: 100%; height: 100%;`);
};

export const formatReleaseData = data => {
  return data.allFile.edges
    .map(item => {
      const release = item.node.childMarkdownRemark.frontmatter;
      return {
        ...release,
        embed: editSizeParams(release.embed),
      };
    })
    .sort((item1, item2) => item1.order - item2.order);
};
