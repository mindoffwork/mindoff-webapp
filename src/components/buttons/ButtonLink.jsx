import React from "react";
import Link from "next/link";
const ButtonLink = ({ link = null, content, isNewTab = false }) => {
  return link ? (
    <Link
      href={link}
      className={`text-sm font-bold uppercase leading-relaxed text-nowrap text-black border-b-2 border-black opacity-40 hover:opacity-100 hover:bg-yellow transition duration-200`}
      aria-label={content}
      target={isNewTab ? "_blank" : "_self"}
      rel={isNewTab ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  ) : (
    <span
      className={`w-fit text-sm font-bold capitalize leading-relaxed text-nowrap text-black border-b-2 border-black opacity-40 hover:opacity-100 hover:bg-yellow transition duration-200`}
      aria-label={content}
    >
      {content}
    </span>
  );
};

export default ButtonLink;
