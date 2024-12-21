/* eslint-disable @next/next/no-page-custom-font */
// These styles apply to every route in the application
import "@/app/global.css";
import { Suspense } from "react";
import TopicsListSkeleton from "@/components/layouts/TopicsListSkeleton";
import SplashScreen from "@/components/layouts/SplashScreen";
import HeaderBar from "@/components/layouts/HeaderBar";
import FooterBar from "@/components/layouts/FooterBar";
import NextTopLoader from "nextjs-toploader";

export const viewport = {
	themeColor: "#faf5ee",
};
export const metadata = {
	title: {
		template: "%s - " + process.env.NAME,
		default: process.env.TITLE,
	},
	description: process.env.DESCRIPTION,
	metadataBase: new URL(process.env.URL),
	openGraph: {
		type: "website",
		title: {
			template: "%s - " + process.env.NAME,
			default: process.env.TITLE,
		},
		description: process.env.DESCRIPTION,
		images: [
			{
				url: process.env.LOGO,
				alt: process.env.NAME + " Logo",
			},
		],
		url: "/",
		siteName: process.env.NAME,
	},
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en" className="overscroll-none">
			<head>
				{/* eslint-disable-next-line @next/next/google-font-display */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				/>
			</head>
			<body className="min-h-screen flex flex-col bg-fawn text-black overscroll-none">
				<SplashScreen />
				<Suspense fallback={<TopicsListSkeleton />}>
					<HeaderBar />
				</Suspense>
				<NextTopLoader
					color="#000000"
					height={3}
					showSpinner={false}
					shadow={false}
				/>
				{children}
				<FooterBar />
			</body>
		</html>
	);
}
