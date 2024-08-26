import "./globals.css";
import NavBar from "@/components/nav/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <NavBar />
          <main className="mt-24 grow flex items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}