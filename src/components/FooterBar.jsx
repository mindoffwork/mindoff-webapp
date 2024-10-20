import React from "react";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

const FooterBar = () => {
  // 1. Process -- Calculate Current Year
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const copyrightYearRange = startYear === currentYear ? currentYear : startYear + "-" + currentYear;

  // 2. Gather -- Data
  const footerLinkList = [
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: "Contact",
      link: "/about#contact",
    },
    {
      id: 3,
      name: "Terms & Privacy",
      link: "/about/policy",
    },
    {
      id: 4,
      name: "©️ " + copyrightYearRange + " " + process.env.SITEFULLNAME,
      link: "/",
    },
  ];

  return (
    <footer className="mt-auto bg-yellow ">
      <ul className="flex flex-wrap gap-y-4 gap-x-4 list-none px-4 md:px-16 pt-6 pb-16 md:pb-6 justify-center text-center md:justify-end border-black border-t-2px md:border-t-3px -mt-2px md:-mt-3px">
        {footerLinkList.map((footeritem, index) => (
          <li key={footeritem.id} className={`font-sans font-medium text-black text-sm tracking-wide opacity-60`}>
            <Link className="hover:opacity-100 hover:bg-black hover:bg-opacity-10 transition duration-200 text-nowrap" href={footeritem.link}>
              {footeritem.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterBar;
