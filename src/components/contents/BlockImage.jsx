import React from "react";
import Image from "next/image";

function BlockImage({ name, content, link, is_caption=true }) {
  const Tag = name;
  return (
    <figure>
      <Image
        src={link}
        alt={content}
        sizes="100vw"
        height={500}
        width={500}
      />
      <figcaption className={`${!is_caption && "sr-only"}`}>{content}</figcaption>
    </figure>
  );
}

export default BlockImage;
