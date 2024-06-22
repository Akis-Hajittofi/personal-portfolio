import { Sofia_Sans_Semi_Condensed } from "next/font/google";
import { Noto_Sans_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Nav from "./Nav";
import SideNav from "./SideNav";

const inter = Sofia_Sans_Semi_Condensed({ subsets: ["latin"] });
// const inter = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Phanakis Hajittofi | Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row bg-base-100 relative`}>
        <SideNav />

        <div className="flex flex-col w-full h-screen overflow-auto">
          <Nav />
          <div className="px-6 sm:px-20 sm:mx-auto">{children}</div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}































































