import React from "react";
import Link from "next/link";
import { ScrollButtons } from "./ScrollButtons";

// --- TOPICS SLIDER FUNCTIONALITIES ---
// 1. Horizontally Scrollable on all screens ✔️
// 2. Scroller Buttons on laptops and above ✔️
// 3. Ligthup Scroller Buttons when scrollable in certain direction ✔️
// 4. Responsive Outline Width -- 2px for small screens and 3px for large screens ✔️


const TopicsSlider = ({ topics__listobj }) => {
  return (
    <section className="relative border-y-black border-y-2px md:border-y-3px">
      <nav>
        <ul
          className="flex overflow-x-auto scrollable flex-row list-none px-0 md:px-8"
          id="topics_slider__id"
        >
          {topics__listobj.map((topic, index) => (
            <li
              key={index}
              className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px py-3 md:py-5 px-5 md:px-8 lg:px-12"
            >
              <Link
                href={topic.src}
                className="flex flex-col items-center justify-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    aria-hidden="true"
                  >
                    {topic.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="mt-2 font-bold tracking-wide uppercase text-1xs lg:text-xs">
                  {topic.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ScrollButtons idToScroll={"topics_slider__id"} />
    </section>
  );
};

export default TopicsSlider;
