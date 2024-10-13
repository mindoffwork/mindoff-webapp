import React from "react";

const ClickButton = ({ htmlTag, href, variant }) => {
  const Tag = htmlTag || "button"
  return (
    <Tag
      href={href}
      className={`text-xs lg:text-sm font-bold uppercase leading-relaxed text-black border-b-2 border-black hover:opacity-100 hover:bg-yellow transition duration-200 
        ${isSelected ? "bg-yellow opacity-100" : "opacity-45"}`}
      aria-label={content}
    >
      {content}
    </Tag>
  );
};

export default ClickButton;
