import { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/nav/nav-bar";
import { lato, inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Anthony Stiles",
    default: "Anthony Stiles"
  },
  description: "The personal website of Anthony Stiles. A senior software developer."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
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