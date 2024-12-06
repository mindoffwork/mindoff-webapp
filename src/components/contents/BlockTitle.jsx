import React from "react";
import { ScrollButtons } from "../buttons/ScrollButtons";

const BlockTitle = ({
	htmlTag = "h2",
	boldText,
	lightText,
	id = 1,
	isScrollButtons = true,
	cardType = "CardsFour",
}) => {
	const Tag = htmlTag;
	return (
		<div className="flex justify-between w-11/12 md:w-10/12 mx-auto py-7 md:py-8 lg:py-12">
			<Tag class="flex items-center font-poppins font-extrabold tracking-widest uppercase md:tracking-widest md:text-base text-sm">
				{boldText && (
					<span
						class="inline-block h-1 w-8 bg-current"
						aria-hidden="true"
					></span>
				)}
				<span class="ml-2">{boldText}</span>
				<span class="pl-2 font-light md:tracking-widest md:text-base text-sm">
					{lightText}
				</span>
			</Tag>
			{isScrollButtons && (
				<ScrollButtons
					idToScroll={`${cardType}__${id}`}
					isGroupButtons={true}
				/>
			)}
		</div>
	);
};

export default BlockTitle;
