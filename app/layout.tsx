import { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/nav/nav-bar";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}