// These styles apply to every route in the application
import "@/app/global.css";
import FloatingLogo from "@/components/FloatingLogo";
import SplashScreen from "@/components/SplashScreen";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-fawn text-black overscroll-none mb-24">
        <SplashScreen>
          <FloatingLogo />
          {children}
        </SplashScreen>
      </body>
    </html>
  );
}
