"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ButtonClick from "./ButtonClick";

const SortOptions = ({ contentList, currentOption }) => {
  // 1. Add query parameter -- ?sort=latest
  const router = useRouter();
  const addSortParam = (content) => {
    router.push("?" + "sort=" + content);
  };
  return (
    <aside className="flex items-center space-x-4 mt-8" aria-label="Sort Posts">
      <span className="font-serif italic">Sort by:</span>
      {contentList.map((content, index) =>
        index === 0 ? (
          <ButtonClick key={content.id} content={content.name} isActive={!currentOption || currentOption === content.name} onClick={() => addSortParam(content.name)}/>
        ) : (
          <ButtonClick key={content.id} content={content.name} isActive={currentOption === content.name} onClick={() => addSortParam(content.name)}/>
        )
      )}
    </aside>
  );
};

export default SortOptions;
