"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const ButtonUnderlined = ({ content, is_selected }) => {
  const router = useRouter();
  const addSortParam = () => {
    // Add query parameter ?sort=latest
    router.push("?" + "sort=" + content);
  };
  return (
    <button
      onClick={addSortParam}
      aria-pressed={is_selected}
      className={`text-xs lg:text-sm font-bold uppercase leading-relaxed text-black border-b-2 border-black hover:opacity-100 hover:bg-yellow transition duration-200 ${
        is_selected ? "bg-yellow opacity-100" : "opacity-45"
      }`}
      aria-label={content}
    >
      {content}
    </button>
  );
};
