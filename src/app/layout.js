// These styles apply to every route in the application
import "@/app/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-fawn text-black ">{children}</body>
    </html>
  )
}