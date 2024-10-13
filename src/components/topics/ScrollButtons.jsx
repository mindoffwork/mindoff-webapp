"use client";
import React, { useEffect, useState } from "react";

export const ScrollButtons = ({ idToScroll }) => {
  // 1. Horizontal Scrolling Buttons
  const scrollLeft = (idToScroll) => {
    const scrollArea = document.getElementById(idToScroll);
    if (scrollArea) {
      const prevDivision = scrollArea.scrollLeft - scrollArea.offsetWidth;
      scrollArea.scrollTo({
        left: prevDivision,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = (idToScroll) => {
    const scrollArea = document.getElementById(idToScroll);
    if (scrollArea) {
      const nextDivision = scrollArea.scrollLeft + scrollArea.offsetWidth;
      scrollArea.scrollTo({
        left: nextDivision,
        behavior: "smooth",
      });
    }
  };

  // 2. Check if Scrollable to left or right
  const [canScroll, setCanScroll] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  useEffect(() => {
    const element = document.getElementById(idToScroll);
    if (element) {
      const checkScroll = () => {
        setCanScroll(element.clientWidth == element.scrollWidth);
        setCanScrollRight(
          element.scrollLeft + element.clientWidth < element.scrollWidth - 1
        );
        setCanScrollLeft(element.scrollLeft > 0);
      };
      checkScroll();
      element.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        element.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [idToScroll]);

  return (
    <>
      <aside className="absolute top-0 left-0 hidden md:flex justify-between items-center h-full w-full pointer-events-none">
        <button
          className={`flex flex-col p-1 items-center justify-center h-full border-r-3px border-black pointer-events-auto ${
            canScrollLeft ? "bg-yellow" : "bg-fawn cursor-not-allowed"
          }`}
          onClick={() => scrollLeft(idToScroll)}
          aria-label="Scroll left"
          aria-disabled={!canScrollRight}
        >
          <span
            className="material-symbols-outlined w-5 h-5 lg:w-6 lg:h-6"
            aria-hidden="true"
          >
            chevron_left
          </span>
        </button>

        <button
          className={`flex flex-col p-1 items-center justify-center h-full border-l-3px border-black pointer-events-auto ${
            canScrollRight ? "bg-yellow" : "bg-fawn cursor-not-allowed"
          }`}
          onClick={() => scrollRight(idToScroll)}
          aria-label="Scroll right"
          aria-disabled={!canScrollRight}
        >
          <span
            className="material-symbols-outlined w-5 h-5 lg:w-6 lg:h-6"
            aria-hidden="true"
          >
            chevron_right
          </span>
        </button>
      </aside>
    </>
  );
};
