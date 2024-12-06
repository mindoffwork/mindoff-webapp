"use client";
import React, { useEffect, useState } from "react";

export const ScrollButtons = ({ idToScroll, isGroupButtons = true }) => {
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
		<aside
			className={`${
				isGroupButtons
					? "hidden md:flex items-center"
					: "absolute top-0 left-0 hidden md:flex justify-between items-center h-full w-full pointer-events-none md:pl-16"
			} `}
		>
			<button
				className={`flex flex-col px-1 py-2 items-center justify-center pointer-events-auto transition duration-200 ${
					isGroupButtons ? "rounded-xl" : "rounded-r-xl bg-fawn"
				} ${
					canScrollLeft
						? "hover:bg-black hover:bg-opacity-5 backdrop-blur-md hover:opacity-100"
						: "opacity-50 cursor-not-allowed"
				} ${!isGroupButtons && !canScrollLeft && "-z-50"}`}
				onClick={() => scrollLeft(idToScroll)}
				aria-label="Scroll left"
				aria-disabled={!canScrollRight}
			>
				<span
					className="material-symbols-outlined w-6 h-6 opacity-50"
					aria-hidden="true"
				>
					chevron_left
				</span>
			</button>

			<button
				className={`flex flex-col px-1 py-2 items-center justify-center pointer-events-auto transition duration-200 ${
					isGroupButtons ? "rounded-xl" : "rounded-l-xl bg-fawn"
				} ${
					canScrollRight
						? "hover:bg-black hover:bg-opacity-5 backdrop-blur-md hover:opacity-100"
						: "opacity-50 cursor-not-allowed"
				} ${!isGroupButtons && !canScrollRight && "-z-50"}`}
				onClick={() => scrollRight(idToScroll)}
				aria-label="Scroll right"
				aria-disabled={!canScrollRight}
			>
				<span
					className="material-symbols-outlined w-6 h-6 opacity-50"
					aria-hidden="true"
				>
					chevron_right
				</span>
			</button>
		</aside>
	);
};
