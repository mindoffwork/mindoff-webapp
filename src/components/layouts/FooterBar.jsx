import React from "react";
import Link from "next/link";

const FooterBar = () => {
	// 1. Process -- Calculate Current Year
	const startYear = 2024;
	const currentYear = new Date().getFullYear();
	const copyrightYearRange =
		startYear === currentYear ? currentYear : startYear + "-" + currentYear;

	// 2. Gather -- Data
	const footerLinkList = [
		{
			id: 1,
			name: "About & Contact",
			link: "/about",
		},
		{
			id: 2,
			name: "Privacy & Terms",
			link: "/policy",
		},
		{
			id: 3,
			name: "©️ " + copyrightYearRange + " " + process.env.SITENAME,
			link: "/",
		},
	];

	return (
		<footer className="mt-auto">
			<ul className="flex flex-wrap gap-y-4 gap-x-4 list-none px-4 md:px-16 py-6 md:pb-6 justify-center text-center md:justify-end border-black border-opacity-5 border-t-2px md:border-t-3px">
				{footerLinkList.map((footeritem, index) => (
					<li
						key={footeritem.id}
						className={`font-sans font-medium text-black text-sm tracking-wide opacity-60`}
					>
						<Link
							className="hover:opacity-100 hover:bg-black hover:bg-opacity-10 transition duration-200 text-nowrap rounded-sm"
							href={footeritem.link}
						>
							{footeritem.name}
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default FooterBar;
