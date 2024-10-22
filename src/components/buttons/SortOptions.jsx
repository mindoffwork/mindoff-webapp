"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ButtonClick from "./ButtonClick";

const SortOptions = ({sortQuery}) => {
  const router = useRouter();
  const sortOptions = [
    { id: 1, name: "Latest" },
    { id: 2, name: "Oldest" },
    { id: 3, name: "Alphabet" },
  ];
  const addSortParam = (content) => {
    router.push("?" + "sort=" + content);
  };
  
  return (
    <aside className="flex items-center space-x-4 mt-8" aria-label="Sort Posts">
      <span className="font-serif italic">Sort by:</span>
      {sortOptions.map((option, index) =>
        index === 0 ? (
          <ButtonClick key={option.id} content={option.name} isActive={!sortQuery || sortQuery === option.name} onClick={() => addSortParam(option.name)}/>
        ) : (
          <ButtonClick key={option.id} content={option.name} isActive={sortQuery === option.name} onClick={() => addSortParam(option.name)}/>
        )
      )}
    </aside>
  );
};

export default SortOptions;
