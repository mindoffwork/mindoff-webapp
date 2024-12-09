import React from "react";
import Link from "next/link";
const ButtonLink = ({ link = null, content, isNewTab = false }) => {
	return link ? (
		<Link
			href={link}
			className={`font-serif text-sm font-bold uppercase tracking-wide text-nowrap text-black border-b-2 border-black opacity-50 hover:opacity-100 hover:bg-yellow transition duration-200 rounded-sm`}
			aria-label={content}
			target={isNewTab ? "_blank" : "_self"}
			rel={isNewTab ? "noopener noreferrer" : undefined}
		>
			{content}
		</Link>
	) : (
		<span
			className={`font-serif w-fit text-sm font-bold capitalize text-nowrap text-black border-b-2 border-black opacity-50 hover:opacity-100 hover:bg-yellow rounded-sm transition duration-200`}
			aria-label={content}
		>
			{content}
		</span>
	);
};

export default ButtonLink;
