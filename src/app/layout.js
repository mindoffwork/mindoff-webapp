/* eslint-disable @next/next/no-page-custom-font */
// These styles apply to every route in the application
import "@/app/global.css";
import SplashScreen from "@/components/layouts/SplashScreen";
import HeaderBar from "@/components/layouts/HeaderBar";
import FooterBar from "@/components/layouts/FooterBar";
import NextTopLoader from "nextjs-toploader";
export const viewport = {
	themeColor: "#faf5ee",
};
export const metadata = {
	title: {
		template: "%s - Mind Off",
		default: "Mind Off: Creativity Unleashed",
	},
	description:
		"My Culmination of wisdom for creative minds around the world to learn, explore and prosper",
	metadataBase: new URL("https://mindoff.work"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		title: {
			template: "%s - Mind Off",
			default: "Mind Off: Creativity Unleashed",
		},
		description: "The React Framework for the Web",
		images: [
			{
				url: "http://localhost:3000/images/logo/MindOff_Logo_YellowBgFull.png",
				alt: "Mind Off Logo",
			},
		],
		url: "http://localhost:3000/",
		siteName: process.env.SITENAME,
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
				<HeaderBar />
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
