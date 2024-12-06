"use client";
import React from "react";

const ButtonClick = ({ onClick, content, isActive }) => {
	return (
		<button
			onClick={onClick}
			className={`text-sm font-bold uppercase leading-relaxed text-black border-b-2 border-black hover:opacity-100 hover:bg-yellow transition duration-200 
        ${isActive ? "bg-yellow opacity-100" : "opacity-45"}`}
			aria-label={content}
		>
			{content}
		</button>
	);
};

export default ButtonClick;
