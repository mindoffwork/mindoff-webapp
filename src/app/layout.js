// These styles apply to every route in the application
import "@/app/global.css";
import SplashScreen from "@/components/SplashScreen";
import FloatingLogo from "@/components/FloatingLogo";
import FooterBar from "@/components/FooterBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overscroll-none">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-fawn text-black overscroll-none">
        <SplashScreen />
        <header>
          <FloatingLogo />
        </header>

        {children}
        <FooterBar />
      </body>
    </html>
  );
}
