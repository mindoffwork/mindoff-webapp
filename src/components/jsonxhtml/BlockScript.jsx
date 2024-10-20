"use client";
import dynamic from "next/dynamic";
import React from "react";

const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
  ssr: false,
});

const BlockScript = ({ name, content, link }) => {
  return (
    <>
      {content === "gist" ? (
        <ReactEmbedGist
          gist={link}
          wrapperClass="gist__bash"
          loadingClass="loading__screen text-[0px] text-transparent h-12 w-full bg-black bg-opacity-10 rounded animate-pulse"
          titleClass="gist__title hidden"
          errorClass="gist__error hidden"
          contentClass="gist__content font-mono"
        />
        
      ) : null}
    </>
  );
};

export default BlockScript;
