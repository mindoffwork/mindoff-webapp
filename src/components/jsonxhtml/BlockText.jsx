import React from "react";
import parse from 'html-react-parser';

const BlockText = ({ name, content }) => {
  const Tag = name;
  return <>{parse(content)}</>;
}

export default BlockText;
