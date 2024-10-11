import React from "react";
import Link from "next/link";
import { ScrollButtons } from "./ScrollButtons";

// --- TOPICS SLIDER FUNCTIONALITIES ---
// 1. Horizontally Scrollable on all screens ✔️
// 2. Scroller Buttons on laptops and above ✔️
// 3. Ligthup Scroller Buttons when scrollable in certain direction ✔️
// 4. Responsive Outline Width -- 2px for small screens and 3px for large screens ✔️

const TopicsSlider = ({ topics__listobj, current_topic = null }) => {
  return (
    <section className="relative border-y-black border-y-2px md:border-y-3px">
      <nav aria-label="Topics Navigation">
        <ul
          className="flex overflow-x-auto scrollable flex-row list-none px-0 md:px-6 lg:px-8 overscroll-none"
          id="topics_slider__id"
        >
          {topics__listobj.map((topic) => (
            <li
              key={topic.id}
              className="flex flex-col flex-shrink-0 items-center bg-white border-x-black border-x-1px md:border-x-1.5px first:border-l-0 last:border-r-0 md:last:border-r-3px"
            >
              <Link
                href={"/topics/" + topic.link}
                className={`flex flex-col items-center justify-center py-3 md:py-4 px-6 md:px-8 lg:px-10 transition-all duration-200 ease-in-out hover:bg-green active:green ${
                  current_topic === topic.link ? "bg-green" : ""
                }`}
                aria-current={current_topic === topic.link ? "page" : undefined}
              >
                <div>
                  <span
                    className="material-symbols-outlined w-5 h-5 lg:w-6 lg:h-6"
                    aria-hidden="true"
                  >
                    {topic.icon}
                  </span>
                </div>
                <div>
                  <h2 className="mt-2 font-bold tracking-wide uppercase text-1xs lg:text-xs">
                    {topic.name}
                  </h2>
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