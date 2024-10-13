import React from "react";

const ButtonLink = ({ htmlTag, href, content }) => {
  const Tag = htmlTag || "button";
  return (
    <Tag
      href={href}
      className={`text-xs lg:text-sm font-bold uppercase leading-relaxed text-nowrap text-black border-b-2 border-black opacity-40 hover:opacity-100 hover:bg-yellow transition duration-200 `}
      aria-label={content}
    >
      {content}
    </Tag>
  );
};

export default ButtonLink;
