import React from "react";
import ButtonLink from "@/components/buttons/ButtonLink";
import Image from "next/image";
export default function notFound() {
	return (
		<main className="flex-grow flex flex-col px-10 items-center justify-center text-center">
			<h1 className="font-sans font-extrabold pb-4 text-5xl tracking-tight">
				<span className="block font-light text-2xl tracking-widest">404</span>
				Deadend!
			</h1>
			<p className="font-serif font-light text-xl tracking-wide mb-6">{`🚧 The Route you're looking for doesn't exist.`}</p>
			<ButtonLink link="/" content={"Go Home"} />
		</main>
	);
}
